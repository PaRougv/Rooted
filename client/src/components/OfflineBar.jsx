import { useState, useEffect } from "react";
import "./OfflineBar.css";

const OfflineBar = () => {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const on = () => setOffline(false);
    const off = () => setOffline(true);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="offline-bar">
      You are offline — some features may be limited
    </div>
  );
};

export default OfflineBar;
