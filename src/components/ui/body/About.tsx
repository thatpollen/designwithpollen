"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import NextImage from "next/image";
import AboutDialog from "../aboutDialog/AboutDialog";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about">
      <div className="relative overflow-hidden py-16">
        <div className="max-w-[966px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 bg-[rgba(23,23,23,1)] py-8 px-6 sm:px-8 sm:py-12 md:px-6 rounded-2xl">
            <div className="grid grid-cols-2 gap-2 w-auto sm:w-1/3">
              <figure className="aspect-square overflow-hidden rounded-br rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
                <NextImage
                  src="/profile/profile-4.jpg"
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  priority
                />
              </figure>
              <figure className="aspect-square overflow-hidden rounded-bl rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
                <NextImage
                  src="/profile/profile-3.jpg"
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  priority
                />
              </figure>
              <figure className="aspect-square overflow-hidden rounded-tr rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
                <NextImage
                  src="/profile/profile-1.JPG"
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  priority
                />
              </figure>
              <figure className="aspect-square overflow-hidden rounded-tl rounded-4xl bg-white grayscale hover:grayscale-0 duration-200 transition-colors">
                <NextImage
                  src="/profile/profile-2.jpg"
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  priority
                />
              </figure>
            </div>

            <div className="flex flex-col items-start gap-4 w-full sm:w-2/3">
              <h2 className="text-2xl font-semibold font-playwrite">
                About me
              </h2>
              <p className="text-sm text-neutral-400">
                Hello there! I&apos;m Pollen Chakma, a product designer and
                front-end developer from Rangamati, near the India and Myanmar
                border. My journey started about 10 years ago as an email
                developer through freelance work. Three years later, I
                transitioned into UX/UI design. Recently, I&apso;ve expanded my
                skills to include JavaScript, React, Next.js, Tailwind, and
                Storybook, which allows me to work more closely on product
                design and development.
              </p>

              <button
                className="text-sm font-medium text-brand cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Read more...
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <AboutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
