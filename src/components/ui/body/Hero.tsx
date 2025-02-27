import MidContainer from "@/components/ui/layout/MidContainer";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-stretch pt-32 pb-[200px] h-[90vh] relative text-white overflow-hidden md:pb-32 md:h-auto xs:py-20">
        {/* <div className="gradient_line w-[24%] h-px absolute left-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(255,203,67,0)] via-[rgba(188,237,4,0.5)] to-[#bced04]"></div> */}
        <MidContainer>
          <div className="flex flex-col items-stretch justify-start gap-8 ">
            <h1 className="w-4/5 text-[4.5rem] leading-[1.1] text-white md:w-full sm:text-h2 xs:text-h4">
              Hi 👋, I&apos;m Pollen, a freelance
              <span className="font-bold text-limeGreen border-b border-limeGreen">
                {" "}
                Product Designer (UX/UI)
              </span>{" "}
              with over 10 years of experience.
            </h1>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
