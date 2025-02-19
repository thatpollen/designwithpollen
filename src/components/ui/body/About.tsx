"use client";

import SmallContainer from "@/components/ui/layout/SmallContainer";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";

export default function About() {
  const elementsToSplitRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (elementsToSplitRef.current) {
      const splitTypes = elementsToSplitRef.current;

      const text = new SplitType(splitTypes, { types: "words" });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: splitTypes,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 2,
          markers: false,
        },
        opacity: 0.24,
        stagger: 0.1,
        duration: 0.4,
      });
    }

    return;
  }, []);

  return (
    <section id="about">
      <div className="relative border-b border-[rgba(255,255,255,0.08)] overflow-hidden">
        <div className="gradient_line w-[24%] h-px absolute left-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(255,203,67,0)] via-[rgba(188,237,4,0.5)] to-[#bced04]"></div>
        <SmallContainer>
          <div className="grid grid-cols-3 gap-4 py-[232px] md:py-32 sm:grid-cols-1 sm:gap-10 xs:py-20">
            <div className="col-span-1 sm:col-auto">
              <span className="text-sm opacity-40 uppercase">About</span>
            </div>
            <div className="col-start-2 col-end-4 sm:col-auto">
              <p
                className="text-h5 font-normal xs:text-h6"
                ref={elementsToSplitRef}
              >
                I&apos;m a UI/UX enthusiast with over 10 years of experience,
                specializing in web development. I craft sleek, engaging
                websites with a focus on user experience. Every site I build is
                not just visually appealing but also interactive and
                user-friendly, thanks to my skillful animation and coding. Even
                off the clock, I&apos;m exploring new trends, always ready for
                the next digital challenge. Let&apos;s create something
                unforgettable together!
              </p>
            </div>
          </div>
        </SmallContainer>
      </div>
    </section>
  );
}
