'use client'

import { useEffect } from "react";

export default function CustomCursor() {

  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]') as HTMLDivElement;
    const cursorOutline = document.querySelector('[data-cursor-outline]') as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // cursorOutline.style.left = `${posX}px`;
      // cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {duration: 600, fill: 'forwards'})

      cursorDot.style.opacity = "1"
      cursorOutline.style.opacity = "1"
    }

    const handleMouseIn =() => {
      cursorDot.style.opacity = "1";
      cursorOutline.style.opacity = "1";
    }

    const handleMouseOut = () => {
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";
    };

    const handleClick = () => {
      cursorDot.classList.add("cursor-remove");
      cursorOutline.classList.add("cursor-remove");  
    };

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseIn)
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('click', handleClick)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseover', handleMouseIn)
    window.removeEventListener('mouseout', handleMouseOut)
    window.removeEventListener('click', handleClick)
  }
  }, [])

  return (
    <>
      <div className="cursor_dot" data-cursor-dot></div>
      <div className="cursor_outline" data-cursor-outline></div>
    </>
  );
}