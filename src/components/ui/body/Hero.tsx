import { DribbbleLogo } from "@/components/icons/Icons";
import MidContainer from "@/components/ui/layout/MidContainer";
import { ArrowUpRight } from "lucide-react";
import NextLink from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-stretch relative text-white overflow-hidden py-12 sm:py-24">
        <MidContainer>
          <div className="max-w-[732px] mx-auto md:max-w-full flex flex-col items-stretch justify-start gap-3">
            <div className="flex justify-center gap-4">
              <span className="font-playwrite text-base leading-6 text-lime-500 text-center">
                10 years in tech
              </span>
              <div className="w-px h-auto bg-[rgba(255,255,255,0.12)]"></div>
              <span className="font-playwrite text-base leading-6 text-lime-500 text-center">
                web3 focused
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl leading-[1] text-center font-semibold text-neutral-50">
              Product Designer <br />
              and Developer
            </h1>
            {/* CTA */}
            <div className="flex self-center items-center gap-4 pt-6">
              <DribbbleLogo />
              <NextLink href="https://dribbble.com/thatpollen" legacyBehavior>
                <a target="_blank">
                  <button className="flex items-center gap-1 text-sm font-medium py-2 px-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl outline-1 outline-zinc-800 outline-offset-4">
                    Design concepts <ArrowUpRight size={20} />
                  </button>
                </a>
              </NextLink>
            </div>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
