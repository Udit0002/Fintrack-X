"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaLayout = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined" && vantaRef.current) {
      console.log("✅ Initializing Vanta...");
      const effect = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e90ff, // Brighter wave color (dodger blue)
      shininess: 50.0, // Increase shininess
      waveHeight: 35.0, // Increase wave height
      waveSpeed: 1.25, // Speed up the motion
        zoom: 1.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
  <div ref={vantaRef} className="absolute inset-0 z-0" />
  <div className="relative z-10">{children}</div>
</div>
  );
};

export default VantaLayout;