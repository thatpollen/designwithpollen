import MidContainer from "@/components/ui/layout/MidContainer";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-stretch py-24 relative text-white overflow-hidden md:py-16">
        <MidContainer>
          <div className="max-w-[732px] mx-auto md:max-w-full flex flex-col items-stretch justify-start gap-3">
            <div className="flex justify-center gap-4">
              <span className="font-playwrite text-xl leading-8 text-lime-500 text-center">
                10 years in tech
              </span>
              <div className="w-px h-auto bg-[rgba(255,255,255,0.12)]"></div>
              <span className="font-playwrite text-xl leading-8 text-lime-500 text-center">
                web3 focused
              </span>
            </div>
            <h1 className="text-6xl leading-[54px] text-center font-medium text-white sm:text-h4 sm:leading-[52px] xs:text-[36px] xs:leading-[40px]">
              Product designer <br />
              and developer
            </h1>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
