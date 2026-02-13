import React , { useEffect, useRef , useState } from 'react'
import "./Camera.css"
import FlashCard from "./FlashCard.jsx";

const Camera = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [image , setImage] = useState(null);
    const [flashMessage, setFlashMessage] = useState("");
    const [showFlash, setShowFlash] = useState(false);

    const triggerFlash = (message) => {
        setFlashMessage(message);
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
        const video = videoRef.current
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0);

        const imageData = canvas.toDataURL("image/png");
        setImage(imageData);
        stopCamera();
    }

    const handleRetake = async () => {
        setImage(null);
        await startCamera();
    }

    useEffect(() => {
        return () => {
            stopCamera();
        }
    }, []);

  return (
    <div className="camera-page">
        <FlashCard
            message={flashMessage}
            type="error"
            visible={showFlash}
            onClose={() => setShowFlash(false)}
        />
        <div className="camera-shell">
            <header className="camera-header">
                <p className="camera-kicker">Studio Mode</p>
                <h2>Capture The Moment</h2>
                <p>Use your camera, frame your shot, and save a crisp still preview.</p>
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
                        <button className="camera-button camera-button--primary" onClick={handleRetake}>Retake</button>
                        <button className="camera-button camera-button--secondary" type="button">Confirm</button>
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
        </div>
    </div>
  )
}

export default Camera
