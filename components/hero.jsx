"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VantaLayout from "./VantaLayout"; // make sure this has working Vanta effect

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <section className="pt-40 pb-20 px-5 relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
            Your Finances<br /> on Autopilot
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Let our AI watch your cash flow, so you don't have to. We'll alert you to what matters, when it matters.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageRef} className="hero-image">
              <Image
                src="/Financial Technology UI Design.jpg"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;