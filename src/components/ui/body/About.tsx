"use client";

import { ArrowUp } from "lucide-react";
import { useState } from "react";
import NextImage from "next/image";
import AboutDialog from "../aboutDialog/AboutDialog";
import MidContainer from "../layout/MidContainer";
import { LinkArrowButton } from "../button/LinkArrowButton";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about">
      {/* Full width */}
      <MidContainer>
        {/* Inner container */}
        <div className="max-w-[980px] bg-neutral-900 mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 sm:p-12 px-6 py-8 rounded-3xl">
          {/* Figure wrapper */}
          <div className="grid grid-cols-2 gap-2 w-full sm:w-1/3">
            <figure className="aspect-square overflow-hidden rounded-br rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
              <NextImage
                src="/profile/profile-4.jpg"
                alt="profile-image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            <figure className="aspect-square overflow-hidden rounded-bl rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
              <NextImage
                src="/profile/profile-3.jpg"
                alt="profile-image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            <figure className="aspect-square overflow-hidden rounded-tr rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
              <NextImage
                src="/profile/profile-1.JPG"
                alt="profile-image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            <figure className="aspect-square overflow-hidden rounded-tl rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
              <NextImage
                src="/profile/profile-2.jpg"
                alt="profile-image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
          </div>

          <div className="flex flex-col items-start gap-4 w-full max-w-[580px] sm:w-2/3">
            <h2 className="text-2xl font-semibold font-inter">About me</h2>
            <p className="text-sm font-medium leading-normal text-neutral-300">
              Hello there! I&apos;m Pollen Chakma, a product designer and
              front-end developer from Rangamati, BD, near the India and Myanmar
              border. My journey started about 10 years ago as an email
              developer through freelance work. Three years later, I
              transitioned into UX/UI design. Recently, I&apos;ve expanded my
              skills to include JavaScript, React, Next.js and Tailwind which
              allows me to work more closely on product design and
              development.{" "}
            </p>
            <div onClick={() => setIsOpen(true)}>
              <LinkArrowButton
                deg={45}
                text="Read more"
                className="text-sm font-medium text-brand cursor-pointer flex items-center self-start gap-1"
              >
                <ArrowUp size={20} />
              </LinkArrowButton>
            </div>
          </div>
        </div>
      </MidContainer>

      {/* About */}
      <AboutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
