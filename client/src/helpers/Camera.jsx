import React , { useEffect, useRef , useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import "./Camera.css"
import FlashCard from "./FlashCard.jsx";
import BackButton from "../components/BackButton.jsx";
import axios from 'axios'

const Camera = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [image , setImage] = useState(null);
    const [flashMessage, setFlashMessage] = useState("");
    const [showFlash, setShowFlash] = useState(false);
    const [flashType, setFlashType] = useState("success");
    const [identification, setIdentification] = useState(null);
    const [isIdentifying, setIsIdentifying] = useState(false);
    const [isCheckingSafety, setIsCheckingSafety] = useState(false);
    
    // Get selected family member from Dashboard
    const selectedFamilyMember = location.state?.selectedFamilyMember;

    const triggerFlash = (message, type = "success") => {
        setFlashMessage(message);
        setFlashType(type);
        setShowFlash(true);
    }

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    }

    const handleConfirm = async () => {
        setIsIdentifying(true);
        setIdentification(null);
        try {
            const response = await axios.post('/camera/uploadphoto' , {
                image: image
            }, { timeout: 60000 })

            if (response.data?.success && response.data?.plant) {
                const plantData = response.data;
                
                // If family member is pre-selected, auto-check safety
                if (selectedFamilyMember) {
                    setIsCheckingSafety(true);
                    triggerFlash(`Plant identified! Checking safety for ${selectedFamilyMember.name}...`, "success");
                    
                    try {
                        const safetyResponse = await axios.post(
                            "/api/safety/check",
                            {
                                plantName: plantData.plant.name,
                                probability: plantData.plant.probability,
                                familyMemberId: selectedFamilyMember._id || selectedFamilyMember.id
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
                            capturedImage: image
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
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let w = video.videoWidth;
        let h = video.videoHeight;
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
        context.drawImage(video, 0, 0, w, h);

        const imageData = canvas.toDataURL("image/jpeg", 0.85);
        setImage(imageData);
        stopCamera();
    }

    const handleRetake = async () => {
        setImage(null);
        setIdentification(null);
        await startCamera();
    }

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
        <BackButton to="/dashboard" label="Back to Dashboard" className="back-button--fixed" />
        <FlashCard
            message={flashMessage}
            type={flashType}
            visible={showFlash}
            onClose={() => setShowFlash(false)}
        />
        <div className="camera-shell">
            <header className="camera-header">
                <p className="camera-kicker">Studio Mode</p>
                <h2>Capture The Moment</h2>
                <p>Use your camera, frame your shot, and save a crisp still preview.</p>
                {selectedFamilyMember && (
                    <div className="camera-selected-member">
                        <span className="camera-member-badge">
                            👤 Scanning for: <strong>{selectedFamilyMember.name}</strong>
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
                        <button className="camera-button camera-button--primary" onClick={handleRetake} disabled={isIdentifying}>Retake</button>
                        <button className="camera-button camera-button--secondary" type="button" onClick={handleConfirm} disabled={isIdentifying || isCheckingSafety}>
                            {isCheckingSafety 
                                ? `Checking safety for ${selectedFamilyMember?.name}...` 
                                : isIdentifying 
                                    ? "Identifying…" 
                                    : `🔍 Identify for ${selectedFamilyMember?.name}`}
                        </button>
                    </div>
                ) : (
                    <>
                        <button className="camera-button camera-button--primary" onClick={startCamera}>Start Camera</button>
                        <button className="camera-button camera-button--secondary" onClick={capturePhoto}>Capture Photo</button>
                    </>
                )}
            </div>

            <canvas ref={canvasRef} style={{ display: "none" }} />

            {image && (
                <div className="camera-captured">
                    <h3>Preview Ready</h3>
                </div>
            )}

            {identification && (
                <div className="camera-results">
                    {getSuggestions().length > 0 ? (
                        <>
                            <h3 className="camera-results-title">Plant identification</h3>
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
                                                <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="camera-result-link">Learn more on Wikipedia</a>
                                            )}
                                            <button
                                                type="button"
                                                className="camera-result-view-btn"
                                                onClick={() => navigate("/plant", { state: { identification, selectedIndex: i, capturedImage: image } })}
                                            >
                                                View full plant details →
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <p className="camera-results-empty">
                            {identification?.result?.is_plant?.binary === false
                                ? "No plant detected in this image."
                                : "Could not identify a plant. Try a clearer photo focused on the leaves or flowers."}
                        </p>
                    )}
                </div>
            )}
        </div>
    </div>
  )
}

export default Camera
