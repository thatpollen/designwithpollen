"use client";

import MidContainer from "../layout/MidContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import NextImage from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { DesignConceptsLogo } from "@/components/icons/Icons";

const images = [
  // Desktop
  { id: 1, image: "/biga-landing.png", width: 1440, height: 1024 },
  // Mobile
  { id: 2, image: "/evm-wallet.jpg", width: 440, height: 956 },
  // Desktop
  { id: 3, image: "/trade-smarter.jpg", width: 1440, height: 1024 },
  // Mobile
  { id: 4, image: "/unwynd-home.png", width: 440, height: 956 },
  // Desktop
  { id: 5, image: "/depin-concept.png", width: 1440, height: 1024 },
  // Mobile
  { id: 6, image: "/evm-nft.png", width: 440, height: 956 },
];

export default function DesignConcepts() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="pt-48 pb-12 space-y-12">
      <MidContainer>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1">
              <DesignConceptsLogo />
              <h2 className="text-2xl font-semibold text-white">
                Glimpse of my work
              </h2>
            </div>
            <p className="text-sm text-neutral-400">
              Here&apos;s a little peek at what I&apos;ve been creating
              lately—hope you enjoy!
            </p>
          </div>
          <div></div>
        </div>
      </MidContainer>
      <div className="max-w-[1920px] mx-auto">
        <div className="w-full h-[480px]">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayPlugin.current]}
          >
            <div className="absolute right-0 -bottom-18 top-auto sm:-top-18 sm:bottom-auto sm:mb-auto flex justify-center items-center gap-2.5">
              <CarouselPrevious className="text-text-inverted-primary bg-surface-inverted-primary hover:bg-brand-orange cursor-pointer" />
              <CarouselNext className="text-text-inverted-primary bg-surface-inverted-primary hover:bg-brand-orange cursor-pointer" />
            </div>
            <CarouselContent className="cursor-ew-resize">
              {images.map((image) => (
                <CarouselItem key={image?.id} className="basis-auto h-full">
                  <figure
                    className={`p-1 bg-neutral-900 border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden relative`}
                  >
                    <NextImage
                      src={`${image?.image}`}
                      alt="design-concepts-img"
                      width={image?.width}
                      height={image?.height}
                      className="max-w-full object-cover rounded-xl"
                      priority
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
