"use client";

import { FigmaLogo } from "@/components/icons/Icons";
import MidContainer from "../layout/MidContainer";

export default function DesignSystem() {
  return (
    <section id="design-system">
      <MidContainer>
        {/* Padding wrapper */}
        <div className="py-12 sm:py-24">
          {/* Inner container */}
          <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-6 sm:p-12 lg:p-6 bg-neutral-900 rounded-3xl">
            {/* Left col */}
            <div className="w-full md:w-2/5">
              <figure className="aspect-square overflow-hidden roudeded-3xl">
                <video
                  className="max-w-full w-full h-full rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/webm/Design-system.webm"
                    type="video/mp4"
                  ></source>
                </video>
              </figure>
            </div>
            {/* Right col */}
            <div className="flex flex-col gap-8 w-full md:w-3/5">
              {/* text wrapper */}
              <div className="flex flex-col self-start gap-3">
                <h2 className="text-4xl font-semibold leading-normal text-neutral-50">
                  Design system
                </h2>
                <p className="text-sm font-medium text-neutral-300 leading-normal">
                  This design system is a toolkit I created to make designing
                  websites, web apps, and mobile apps faster and easier. It
                  includes reusable parts like buttons, forms, and menus, as
                  well as simple rules for colors, fonts, and spacing. Using
                  this system helps me create designs that look good, work well,
                  and stay consistent across all projects. It&apos;s a great
                  tool for quickly building clean and user-friendly designs.
                </p>
              </div>

              <a
                href="https://www.figma.com/design/mslBI8UuPBd9KT3wO6aTMr/designwithpollen-DS?node-id=914-733&t=xq5wzH8TbzH2NHYQ-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center self-start gap-2 py-2 px-3 border border-zinc-800 text-neutral-50 cursor-pointer hover:bg-zinc-800 rounded-xl text-sm">
                  <span>
                    <FigmaLogo />
                  </span>
                  Preview in Figma
                </button>
              </a>
            </div>
          </div>
        </div>
      </MidContainer>
    </section>
  );
}
