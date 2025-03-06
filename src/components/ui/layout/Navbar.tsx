"use client";

import MidContainer from "@/components/ui/layout/MidContainer";
import NextLink from "next/link";
import NextImage from "next/image";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] bg-dark">
      <div className="py-4 border-b border-zinc-900">
        <MidContainer>
          <div className="flex justify-between items-center">
            <div className="nav_left">
              <div>
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
              </div>
            </div>

            {/*             <div className="nav_middle flex justify-start items-center gap-2 px-1.5 py-1 overflow-hidden bg-dark border border-[rgba(255,255,255,0.12)] rounded-[40px] backdrop-blur-[5px] w-[248px] max-w-max"> */}
            <div className="nav_middle flex justify-start items-center gap-2 px-1.5 py-1 overflow-hidden bg-dark border border-zinc-800 rounded-[40px] backdrop-blur-[5px] max-w-max text-zinc-50">
              <Link
                // activeClass="nav_active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]"
              >
                About
              </Link>

              <Link
                // activeClass="nav_active"
                to="works"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration-100 hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]"
              >
                Work
              </Link>

              {/*               <Link
                // activeClass="nav_active"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration-100 hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]"
              >
                Servies
              </Link> */}

              <NextLink href="mailto:talkspollen@gmail.com" legacyBehavior>
                <a
                  className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration-100 hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]"
                  target="_blank"
                >
                  Contact
                </a>
              </NextLink>
            </div>
          </div>
        </MidContainer>
      </div>
    </nav>
  );
}
