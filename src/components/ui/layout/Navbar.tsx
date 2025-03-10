"use client";

import MidContainer from "@/components/ui/layout/MidContainer";
import NextLink from "next/link";
import NextImage from "next/image";
import { Calendar, ArrowUp } from "lucide-react";
import { FramerButton } from "../button/FramerButton";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] bg-neutral-950 backdrop-blur-[5px]">
      <div className="py-4 border-b border-zinc-900">
        <MidContainer>
          {/* Nav inner wrapper */}
          <div className="flex justify-between items-center">
            {/* Nav left */}
            <div className="nav_left">
              <NextLink href="/">
                <figure className="w-10 h-10 overflow-hidden rounded-xl">
                  <NextImage
                    src="/Avatar.png"
                    alt="nav-image"
                    width={40}
                    height={40}
                    className="w-full h-full max-w-full"
                    priority
                  />
                </figure>
              </NextLink>
            </div>
            {/* Nav right */}
            <div className="nav_right flex flex-row items-center gap-4">
              <div className="text-sm flex items-center gap-2 text-zinc-200">
                Free design consultation{" "}
                <FramerButton className="rotate-90 rounded-full">
                  <ArrowUp size={16} />
                </FramerButton>
              </div>
              <NextLink
                href="https://koalendar.com/e/design-consultation-koaHjnin"
                legacyBehavior
              >
                <a target="_blank">
                  <button className="flex items-center justify-center self-start gap-2 py-2 px-3 bg-brand text-zinc-950 cursor-pointer rounded-xl text-sm font-medium hover:bg-lime-400">
                    <Calendar size={16} />
                    Book a call
                  </button>
                </a>
              </NextLink>
            </div>
          </div>
        </MidContainer>
      </div>
    </nav>
  );
}
