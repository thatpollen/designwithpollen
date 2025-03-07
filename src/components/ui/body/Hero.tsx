import MidContainer from "@/components/ui/layout/MidContainer";

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
            <h1 className="text-5xl sm:text-6xl leading-[1] text-center font-medium text-neutral-50">
              Product designer <br />
              and developer
            </h1>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
