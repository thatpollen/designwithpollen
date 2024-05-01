'use client';

import React from "react";

export default function CustomCursor() {
  const cursor = React.useRef<HTMLDivElement>(null);

  const positionRef = React.useRef<{
    mouseX: number;
    mouseY: number;
    destinationX: number;
    destinationY: number;
    distanceX: number;
    distanceY: number;
    key: number;
}>({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      if (cursor.current) {
        positionRef.current.mouseX = (mouseX - cursor.current.clientWidth / 2);
        positionRef.current.mouseY = (mouseY - cursor.current.clientHeight / 2);

        
        cursor.current.classList.remove("cursor-remove");
        // cursor.current.style.opacity = "1";
      }
    };

    const handleMouseIn =() => {
      if (cursor.current) {
        cursor.current.style.opacity = "1";
      }
    }

    const handleMouseOut = () => {
      if (cursor.current) {
        cursor.current.style.opacity = "0";
  }
    };

    const handleClick = () => {
      if (cursor.current) {
        cursor.current.classList.add("cursor-remove");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseIn);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseIn); 
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleClick);
    };
  }, []);


  React.useEffect(() => {
    const easeOutCubic = (t: number) => t * (2 - t) * 3;

    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = easeOutCubic((mouseX - destinationX) * 0.1) + destinationX;
        positionRef.current.distanceY = easeOutCubic((mouseY - destinationY) * 0.1) + destinationY;

        if (
          Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY)
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (cursor.current) {
        cursor.current.style.left = destinationX + "px";
        cursor.current.style.top = destinationY + "px";
        // cursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    followMouse();

    const currentRef = positionRef.current;

     return () => {
      cancelAnimationFrame(currentRef.key);
  };
  }, []);

  return (
    <div className="custom__cursor flex justify-center items-center fixed inset-0 z-[1001] mix-blend-difference pointer-events-none opacity-0 transition-opacity duration-[400ms]" ref={cursor}>
      <div className="w-6 h-6 bg-white rounded-[32px] shrink-0 grow-0">
      </div>
    </div>
  );
}
