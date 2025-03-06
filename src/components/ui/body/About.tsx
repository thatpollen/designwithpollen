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
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-10 bg-[rgba(23,23,23,1)] p-12 rounded-2xl">
              <div className="col-span-1 sm:col-auto">
                <span className={`font-inter text-xl leading-8 text-lime-500`}>
                  About
                </span>
              </div>
              <div className="col-span-2 col-end-4 sm:col-auto">
                <div className="flex flex-col items-start gap-6">
                  <h2 className="text-lg">About me</h2>
                  <p
                    className="text-2xl text-zinc-50 leading-7 font-medium"
                    ref={elementsToSplitRef}
                  >
                    Hello there! I&apos;m Pollen Chakma, a product designer and
                    front-end developer from Rangamati, near the India and
                    Myanmar border. My journey started about 10 years ago as an
                    email developer through freelance work. Three years later, I
                    transitioned into UX/UI design. Recently, I&apso;ve expanded
                    my skills to include JavaScript, React, Next.js, Tailwind,
                    and Storybook, which allows me to work more closely on
                    product design and development.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/thatpollen"
                    legacyBehavior
                  >
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
