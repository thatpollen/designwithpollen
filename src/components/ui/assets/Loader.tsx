"use client";

import { useEffect, useRef } from "react";

export default function Loader() {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finishLoading = () => {
      if (loadingRef.current) {
        loadingRef.current.style.opacity = "0";
        loadingRef.current.style.visibility = "hidden";
      }
    };

    const timer = setTimeout(() => {
      finishLoading();
    }, 2200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen fixed inset-0 z-[1003] bg-black opacity-100 visible transition-all duration-500"
      ref={loadingRef}
    >
      <h6 className="text-h6 font-medium uppercase">Pollen Chakma</h6>
      <span className="text-sm font-light opacity-[56%]">
        I do Design & Develop
      </span>
    </div>
  );
}
