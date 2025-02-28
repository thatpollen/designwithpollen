"use client";

import MidContainer from "@/components/ui/layout/MidContainer";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      <div className="relative overflow-hidden">
        <MidContainer>
          <div className="py-24 md:py-0 ">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-10 px-6 bg-[rgba(23,23,23,1)] p-12 rounded-2xl">
              <div className="col-span-1 sm:col-auto">
                <span
                  className={`font-cevicheOne text-[30px] leading-8 text-limeGreen uppercase`}
                >
                  About
                </span>
              </div>
              <div className="col-span-2 col-end-4 sm:col-auto">
                <div className="flex flex-col items-start gap-6">
                  <p
                    className="text-h6 leading-[26.4px] font-normal md:text-h6"
                    ref={elementsToSplitRef}
                  >
                    With 10 years of experience  at the intersection of
                    innovation and design, I’ve dedicated my career to shaping
                    the digital frontier—especially in Web3, startups, and
                    fintech. As a Product Designer, Design Strategist, and
                    Systems Thinker, I thrive on transforming bold ideas into
                    intuitive, impactful experiences that redefine how we
                    interact with technology.
                  </p>
                  <Link href="https://www.linkedin.com/in/thatpollen" legacyBehavior>
                    <a
                      className="flex items-center gap-1 px-3 py-2 rounded-xl border border-[rgba(255,255,255,0.12)] text-xs hover:bg-[rgba(38,38,38,1)]"
                      target="_blank"
                    >
                      Linkedin
                      <span>
                        <ArrowUpRight size={16} />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
