import MidContainer from "@/components/ui/layout/MidContainer";
import { zigzagRounded } from "@/lib/utils/fonts";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-stretch py-24 relative text-white overflow-hidden md:py-16">
        <MidContainer>
          <div className="max-w-[732px] mx-auto md:max-w-full flex flex-col items-stretch justify-start gap-4">
            <span
              className={`${zigzagRounded.className} text-lg text-limeGreen uppercase text-center`}
            >
              10 years in tech
            </span>
            <h1 className="text-[60px] leading-[66px] text-center font-medium text-white sm:text-h4 sm:leading-[52px] xs:text-[36px] xs:leading-[40px]">
              Freelance product designer (UX/UI) and developer
            </h1>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
