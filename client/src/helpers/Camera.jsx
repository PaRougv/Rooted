import React , { useEffect, useRef , useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Camera.css"
import FlashCard from "./FlashCard.jsx";
import BackButton from "../components/BackButton.jsx";
import axios from 'axios'

const MAP_STYLE = "https://tiles.openfreemap.org/styles/positron";
const DEFAULT_MAP_CENTER = { lat: 20.5937, lng: 78.9629 };

const Camera = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);
    const streamRef = useRef(null);
    const [image , setImage] = useState(null);
    const [flashMessage, setFlashMessage] = useState("");
    const [showFlash, setShowFlash] = useState(false);
    const [flashType, setFlashType] = useState("success");
    const [identification, setIdentification] = useState(null);
    const [isIdentifying, setIsIdentifying] = useState(false);
    const [isCheckingSafety, setIsCheckingSafety] = useState(false);
    const [cnnResult, setCnnResult] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [locationMode, setLocationMode] = useState("none");
    const [manualLocation, setManualLocation] = useState(null);
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [mapView, setMapView] = useState({
        longitude: DEFAULT_MAP_CENTER.lng,
        latitude: DEFAULT_MAP_CENTER.lat,
        zoom: 4,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
                () => setUserLocation(null)
            );
        }
    }, []);

    useEffect(() => {
        if (userLocation && locationMode === "none") {
            setLocationMode("current");
        }
    }, [userLocation, locationMode]);
    
    // Get selected family member from Dashboard
    const selectedFamilyMember = location.state?.selectedFamilyMember;

    const triggerFlash = (message, type = "success") => {
        setFlashMessage(message);
        setFlashType(type);
        setShowFlash(true);
    }

    const resetResults = () => {
        setIdentification(null);
        setCnnResult(null);
    };

    const selectedLocation =
        locationMode === "current"
            ? userLocation
            : locationMode === "manual"
                ? manualLocation
                : null;

    const mapCenter = manualLocation || userLocation || DEFAULT_MAP_CENTER;

    useEffect(() => {
        if (locationMode !== "manual") return;
        setMapView({
            longitude: mapCenter.lng,
            latitude: mapCenter.lat,
            zoom: manualLocation || userLocation ? 11 : 4,
        });
    }, [locationMode, mapCenter.lat, mapCenter.lng, manualLocation, userLocation]);

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    }

    const createPreviewImage = (source) => new Promise((resolve, reject) => {
        if (source instanceof HTMLVideoElement) {
            resolve(source);
            return;
        }

        const previewImage = new Image();
        previewImage.onload = () => resolve(previewImage);
        previewImage.onerror = () => reject(new Error("Could not read selected image"));
        previewImage.src = source;
    });

    const convertImageToDataUrl = async (source) => {
        const previewImage = await createPreviewImage(source);
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let w = source instanceof HTMLVideoElement ? source.videoWidth : previewImage.width;
        let h = source instanceof HTMLVideoElement ? source.videoHeight : previewImage.height;
        const maxDim = 1024;
        if (w > maxDim || h > maxDim) {
            if (w > h) {
                h = (h / w) * maxDim;
                w = maxDim;
            } else {
                w = (w / h) * maxDim;
                h = maxDim;
            }
        }

        canvas.width = w;
        canvas.height = h;
        context.drawImage(previewImage, 0, 0, w, h);

        return canvas.toDataURL("image/jpeg", 0.85);
    };

    const handleConfirm = async () => {
        if (!image || typeof image !== "string" || !image.startsWith("data:image/")) {
            triggerFlash("Please capture or upload a valid image before continuing.", "error");
            return;
        }

        setIsIdentifying(true);
        resetResults();

        // Run CNN classifier in parallel (silent fail)
        axios.post('/api/ml/classify', { image }, { withCredentials: true })
            .then(res => { if (res.data?.plant_predictions?.length) setCnnResult(res.data); })
            .catch(() => {});
        try {
            const response = await axios.post('/camera/uploadphoto' , {
                image: image
            }, { timeout: 60000 })

            if (response.data?.success && response.data?.plant) {
                const plantData = response.data;
                setIdentification(plantData);
                
                // If family member is pre-selected, auto-check safety
                if (selectedFamilyMember) {
                    setIsCheckingSafety(true);
                    triggerFlash(`Plant identified! Checking safety for ${selectedFamilyMember.name}...`, "success");
                    
                    try {
                        const safetyResponse = await axios.post(
                            "/api/safety/check",
                            {
                                plantName: plantData.plant.name,
                                plantCommonNames: plantData.plant.commonNames || [],
                                probability: plantData.plant.probability,
                                familyMemberId: selectedFamilyMember._id || selectedFamilyMember.id,
                                lat: selectedLocation?.lat ?? null,
                                lng: selectedLocation?.lng ?? null
                            },
                            { withCredentials: true }
                        );

                        if (safetyResponse.data?.success) {
                            // Navigate directly to result page with safety data
                            navigate("/plant-safety-result", {
                                state: {
                                    plantData: plantData,
                                    safetyData: safetyResponse.data.data,
                                    capturedImage: image,
                                    familyMember: selectedFamilyMember
                                }
                            });
                        } else {
                            triggerFlash(safetyResponse.data?.message || "Safety check failed", "error");
                        }
                    } catch (safetyError) {
                        console.error(safetyError);
                        triggerFlash("Safety check failed. Please try again.", "error");
                    } finally {
                        setIsCheckingSafety(false);
                    }
                } else {
                    // No family member selected, go to selection page
                    triggerFlash("Plant identified!", "success");
                    navigate("/plant-safety", {
                        state: {
                            identification: plantData,
                            capturedImage: image,
                            selectedLocation
                        }
                    });
                }
            } else {
                triggerFlash(response.data?.message || "Image uploaded successfully", "success");
            }
        } catch (error) {
            console.error(error);
            triggerFlash(error.response?.data?.message || "Identification failed. Please try again.", "error");
        } finally {
            setIsIdentifying(false);
        }
    }

    const startCamera = async () => {
        try {
            stopCamera();
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            })

            streamRef.current = stream;
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.log(error)
            triggerFlash("Camera access failed");
        }
    }

    const capturePhoto = async () => {
        const video = videoRef.current;
        if (!video || !video.videoWidth || !video.videoHeight) {
            triggerFlash("Start the camera before capturing a photo.", "error");
            return;
        }

        const imageData = await convertImageToDataUrl(videoRef.current);
        resetResults();
        setImage(imageData);
        stopCamera();
        setShowLocationModal(true);
    }

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            triggerFlash("Please choose an image file.", "error");
            e.target.value = "";
            return;
        }

        try {
            stopCamera();
            resetResults();
            const objectUrl = URL.createObjectURL(file);
            const imageData = await convertImageToDataUrl(objectUrl);
            URL.revokeObjectURL(objectUrl);
            setImage(imageData);
            setShowLocationModal(true);
        } catch (error) {
            console.error(error);
            triggerFlash("Could not read the selected image.", "error");
        } finally {
            e.target.value = "";
        }
    };

    const handleRetake = async () => {
        setImage(null);
        resetResults();
        await startCamera();
    }

    const handleUseCurrentLocation = () => {
        if (!userLocation) {
            triggerFlash("Current location is not available yet. You can still pick a point on the map.", "error");
            return;
        }
        setLocationMode("current");
    };

    const handleUseManualLocation = () => {
        setLocationMode("manual");
        if (!manualLocation) {
            setManualLocation(userLocation || DEFAULT_MAP_CENTER);
        }
    };

    const handleSkipLocation = () => {
        setLocationMode("none");
    };

    const handleMapPick = (event) => {
        const nextLocation = {
            lat: event.lngLat.lat,
            lng: event.lngLat.lng,
        };
        setManualLocation(nextLocation);
        if (locationMode !== "manual") {
            setLocationMode("manual");
        }
    };

    const getSuggestions = () => {
        if (!identification) return [];
        const result = identification?.result || identification;
        const classification = result?.classification || result;
        const suggestions = classification?.suggestions || result?.suggestions || identification?.suggestions || [];
        return Array.isArray(suggestions) ? suggestions : [];
    };

    const getPlantName = (suggestion) => {
        const details = suggestion?.details || suggestion?.plant_details || suggestion;
        const commonNames = details?.common_names || details?.common_name;
        if (Array.isArray(commonNames) && commonNames[0]) return commonNames[0];
        if (typeof commonNames === "string") return commonNames;
        return suggestion?.name || suggestion?.plant_name || suggestion?.scientific_name || null;
    };

    const getPlantDetails = (suggestion) => {
        return suggestion?.details || suggestion?.plant_details || {};
    };

    const getDescription = (details) => {
        const desc = details?.description || details?.wiki_description;
        if (typeof desc === "string") return desc;
        return desc?.value || null;
    };

    const getTaxonomy = (details) => {
        const tax = details?.taxonomy;
        const structured = details?.structured_name;
        if (tax && typeof tax === "object") {
            const parts = [tax.genus, tax.family, tax.order].filter(Boolean);
            if (parts.length) return parts.join(" • ");
        }
        if (structured?.genus) return structured.species ? `${structured.genus} ${structured.species}` : structured.genus;
        return null;
    };

    useEffect(() => {
        return () => {
            stopCamera();
        }
    }, []);

  return (
    <div className="camera-page">
        <BackButton to="/dashboard" label={t("nav.dashboard")} className="back-button--fixed" />
        <FlashCard
            message={flashMessage}
            type={flashType}
            visible={showFlash}
            onClose={() => setShowFlash(false)}
        />
        <div className="camera-shell">
            <header className="camera-header">
                <p className="camera-kicker">{t("camera.kicker")}</p>
                <h2>{t("camera.title")}</h2>
                <p>{t("camera.subtitle")}</p>
                {selectedFamilyMember && (
                    <div className="camera-selected-member">
                        <span className="camera-member-badge">
                            {t("camera.scanningFor")} <strong>{selectedFamilyMember.name}</strong>
                            {selectedFamilyMember.anyOtherCondition && (
                                <span className="camera-member-condition"> ({selectedFamilyMember.anyOtherCondition})</span>
                            )}
                        </span>
                    </div>
                )}
            </header>

            <div className="camera-preview">
                {image ? (
                    <img src={image} alt="Captured" className="camera-preview-image" />
                ) : (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                    />
                )}
            </div>

            <div className="camera-actions">
                {image ? (
                    <div className="camera-captured-actions">
                        <button className="camera-button camera-button--primary" onClick={handleRetake} disabled={isIdentifying}>{t("camera.retake")}</button>
                        <button className="camera-button camera-button--secondary" type="button" onClick={handleConfirm} disabled={isIdentifying || isCheckingSafety}>
                            {isCheckingSafety
                                ? t("camera.checkingSafety", { name: selectedFamilyMember?.name })
                                : isIdentifying
                                    ? t("camera.identifying")
                                    : selectedFamilyMember?.name
                                        ? t("camera.identifyFor", { name: selectedFamilyMember.name })
                                        : t("camera.identifyPlant")}
                        </button>
                    </div>
                ) : (
                    <>
                        <button className="camera-button camera-button--primary" onClick={startCamera}>{t("camera.startCamera")}</button>
                        <button className="camera-button camera-button--secondary" onClick={capturePhoto}>{t("camera.capturePhoto")}</button>
                        <button className="camera-button camera-button--ghost" type="button" onClick={openFilePicker}>{t("camera.uploadImage")}</button>
                    </>
                )}
            </div>

            <input
                ref={fileInputRef}
                className="camera-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />

            {image && (
                <div className="camera-captured">
                    <h3>{t("camera.previewReady")}</h3>
                </div>
            )}

            {image && (
                <section className="camera-location-card">
                    <div className="camera-location-header">
                        <div>
                            <p className="camera-location-kicker">{t("camera.mapsTag")}</p>
                            <h3>{t("camera.chooseLocation")}</h3>
                            <p>
                                {t("camera.locationDesc")}
                            </p>
                        </div>
                        <span className="camera-location-status">
                            {selectedLocation
                                ? `${selectedLocation.lat.toFixed(4)}, ${selectedLocation.lng.toFixed(4)}`
                                : t("camera.noLocation")}
                        </span>
                    </div>

                    <div className="camera-location-actions">
                        <button
                            type="button"
                            className={`camera-location-chip ${locationMode === "current" ? "camera-location-chip--active" : ""}`}
                            onClick={handleUseCurrentLocation}
                            disabled={!userLocation}
                        >
                            {t("camera.useCurrent")}
                        </button>
                        <button
                            type="button"
                            className={`camera-location-chip ${locationMode === "manual" ? "camera-location-chip--active" : ""}`}
                            onClick={handleUseManualLocation}
                        >
                            {t("camera.pickOnMap")}
                        </button>
                        <button
                            type="button"
                            className={`camera-location-chip ${locationMode === "none" ? "camera-location-chip--active" : ""}`}
                            onClick={handleSkipLocation}
                        >
                            {t("camera.skipLocation")}
                        </button>
                    </div>

                    {locationMode === "manual" && (
                        <div className="camera-location-map">
                            <Map
                                {...mapView}
                                style={{ width: "100%", height: "100%" }}
                                mapStyle={MAP_STYLE}
                                onMove={(event) => setMapView(event.viewState)}
                                onClick={handleMapPick}
                            >
                                <NavigationControl position="top-right" />
                                {manualLocation && (
                                    <Marker longitude={manualLocation.lng} latitude={manualLocation.lat} anchor="bottom">
                                        <div className="camera-location-marker" />
                                    </Marker>
                                )}
                            </Map>
                            <p className="camera-location-help">
                                {t("camera.mapHelp")}
                            </p>
                        </div>
                    )}
                </section>
            )}

            {/* Location confirmation modal */}
            {showLocationModal && (
                <div className="camera-location-modal-overlay" onClick={() => setShowLocationModal(false)}>
                    <div className="camera-location-modal" onClick={(e) => e.stopPropagation()}>
                        <h3 className="camera-location-modal-title">{t("camera.foundHere")}</h3>
                        <p className="camera-location-modal-sub">{t("camera.tagLocation")}</p>
                        {userLocation && (
                            <p className="camera-location-modal-coords">
                                📍 {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                            </p>
                        )}
                        <div className="camera-location-modal-actions">
                            <button
                                className="camera-location-modal-btn camera-location-modal-btn--primary"
                                onClick={() => {
                                    if (userLocation) setLocationMode("current");
                                    setShowLocationModal(false);
                                }}
                                disabled={!userLocation}
                            >
                                {t("camera.yesUseLocation")}
                            </button>
                            <button
                                className="camera-location-modal-btn camera-location-modal-btn--secondary"
                                onClick={() => {
                                    setLocationMode("manual");
                                    if (!manualLocation) setManualLocation(userLocation || DEFAULT_MAP_CENTER);
                                    setShowLocationModal(false);
                                }}
                            >
                                {t("camera.pickOnMap")}
                            </button>
                            <button
                                className="camera-location-modal-btn camera-location-modal-btn--ghost"
                                onClick={() => {
                                    setLocationMode("none");
                                    setShowLocationModal(false);
                                }}
                            >
                                {t("camera.skip")}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {identification && (
                <div className="camera-results">
                    {getSuggestions().length > 0 ? (
                        <>
                            <h3 className="camera-results-title">{t("camera.plantId")}</h3>
                            <div className="camera-results-list">
                                {getSuggestions().slice(0, 5).map((s, i) => {
                                    const details = getPlantDetails(s);
                                    const description = getDescription(details);
                                    const taxonomy = getTaxonomy(details);
                                    const wikiUrl = details?.url;
                                    return (
                                        <div key={i} className="camera-result-card">
                                            <div className="camera-result-header">
                                                <span className="camera-result-name">{getPlantName(s) || s.name || "Unknown"}</span>
                                                {s.probability != null && (
                                                    <span className="camera-result-prob">{(s.probability * 100).toFixed(0)}% match</span>
                                                )}
                                            </div>
                                            {s.name && getPlantName(s) !== s.name && (
                                                <p className="camera-result-scientific">{s.name}</p>
                                            )}
                                            {taxonomy && <p className="camera-result-taxonomy">{taxonomy}</p>}
                                            {description && (
                                                <p className="camera-result-desc">{description.slice(0, 300)}{description.length > 300 ? "…" : ""}</p>
                                            )}
                                            {wikiUrl && (
                                                <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="camera-result-link">{t("camera.learnMore")}</a>
                                            )}
                                            <button
                                                type="button"
                                                className="camera-result-view-btn"
                                                onClick={() => navigate("/plant", { state: { identification, selectedIndex: i, capturedImage: image } })}
                                            >
                                                {t("camera.viewDetails")}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <p className="camera-results-empty">
                            {identification?.result?.is_plant?.binary === false
                                ? t("camera.noPlantDetected")
                                : t("camera.tryAgain")}
                        </p>
                    )}
                </div>
            )}

            {/* CNN Model Results */}
            {cnnResult && (
                <div className="camera-results camera-cnn-results">
                    <h3 className="camera-results-title">
                        {t("camera.cnnAnalysis")}
                        <span className="camera-cnn-badge">{cnnResult.model?.split('(')[0].trim()}</span>
                    </h3>
                    <p className="camera-cnn-note">{cnnResult.note}</p>
                    <div className="camera-cnn-bars">
                        {cnnResult.plant_predictions.map((p, i) => (
                            <div key={i} className="camera-cnn-bar-row">
                                <span className="camera-cnn-plant">{p.plant}</span>
                                <div className="camera-cnn-bar-track">
                                    <div
                                        className="camera-cnn-bar-fill"
                                        style={{ width: `${Math.round(p.confidence * 100)}%` }}
                                    />
                                </div>
                                <span className="camera-cnn-pct">{Math.round(p.confidence * 100)}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Camera
