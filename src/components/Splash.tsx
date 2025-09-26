"use client";
import { useEffect, useState } from "react";

export default function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySeen = sessionStorage.getItem("splashSeen");
    if (alreadySeen) {
      setVisible(false);
      return;
    }

    const minDelay = new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1500);
    });

    const pageLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    // Ikkalasi ham tugashini kutish
    Promise.all([minDelay, pageLoad]).then(() => {
      setVisible(false);
      sessionStorage.setItem("splashSeen", "1");
    });
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-overlay" role="status" aria-label="Loading">
      <img src="/image/start.png" alt="Splash" className="splash-image" />
    </div>
  );
}
