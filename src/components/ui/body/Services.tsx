import MidContainer from "@/components/ui/layout/MidContainer";

export default function Services() {
  return (
    <section id="services">
      <div className="py-[232px] border border-[rgba(255,255,255,0.08)] relative overflow-hidden md:py-32 xs:py-20">
        <div className="gradient_line w-[24%] h-px absolute left-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(255,203,67,0)] via-[rgba(188,237,4,0.5)] to-[#bced04]"></div>
        <MidContainer>
          <div className="flex flex-col rounded-2xl">
            <div className="flex flex-col gap-6 px-10 pb-16 xs:px-0">
              <h2 className="text-h2 sm:text-h4">What I can do</h2>
              <p className="w-1/2 font-light xs:w-full">
                Looking for help online? I&apos;ve got you covered! Learn how I
                can make your brand shine and stick in people&apos;s minds.
                Here&apos;s what I do!
              </p>
            </div>
            <div className="flex flex-col px-10">
              <div className="flex justify-between gap-x-10 gap-y-4 p-12 w-full border-b border-[rgba(255,255,255,0.08)] md:gap-x-6 md:px-6 sm:flex-col xs:px-0">
                <div className="w-1/2 sm:w-full">
                  <h5 className="text-[2rem] leading-[1.5]">UI/UX Design</h5>
                </div>
                <div className="w-1/2 sm:w-full">
                  <p className="font-light text-base leading-[1.5] opacity-[65%]">
                    Designing intuitive, striking user experiences backed by
                    real human insights. I create solutions that resonate,
                    merging beauty with functionality for a user journey that
                    feels effortlessly seamless.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-10 gap-y-4 p-12 w-full border-b border-[rgba(255,255,255,0.08)] md:gap-x-6 md:px-6 sm:flex-col xs:px-0">
                <div className="w-1/2 sm:w-full">
                  <h5 className="text-[2rem] leading-[1.5]">
                    Full-stack Development
                  </h5>
                </div>
                <div className="w-1/2 sm:w-full">
                  <p className="font-light text-base leading-[1.5] opacity-[65%]">
                    Not just code— it&apos;s digital craftsmanship. From
                    websites to web apps, I deliver excellence and stand by for
                    ongoing support.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-10 gap-y-4 p-12 w-full border-b border-[rgba(255,255,255,0.08)] md:gap-x-6 md:px-6 sm:flex-col xs:px-0">
                <div className="w-1/2 sm:w-full">
                  <h5 className="text-[2rem] leading-[1.5]">
                    Brand Identity Design
                  </h5>
                </div>
                <div className="w-1/2 sm:w-full">
                  <p className="font-light text-base leading-[1.5] opacity-[65%]">
                    A duo with a vision— together with my associate, we craft
                    memorable brand stories. It&apos;s not just logos; it&apos;s
                    identities that connect and stick.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-10 gap-y-4 p-12 w-full border-b border-[rgba(255,255,255,0.08)] md:gap-x-6 md:px-6 sm:flex-col xs:px-0">
                <div className="w-1/2 sm:w-full">
                  <h5 className="text-[2rem] leading-[1.5]">
                    Visual Information Designer
                  </h5>
                </div>
                <div className="w-1/2 sm:w-full">
                  <p className="font-light text-base leading-[1.5] opacity-[65%]">
                    As a Visual Information Designer, I transform complex
                    information into engaging visuals—whether through
                    data-driven graphics, user-friendly interfaces, or
                    compelling layouts. Let me turn your content into a visually
                    impactful experience for your audience.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-x-10 gap-y-4 p-12 w-full md:gap-x-6 md:px-6 sm:flex-col xs:px-0">
                <div className="w-1/2 sm:w-full">
                  <h5 className="text-[2rem] leading-[1.5]">
                    Webflow & Interactive Solutions
                  </h5>
                </div>
                <div className="w-1/2 sm:w-full">
                  <p className="font-light text-base leading-[1.5] opacity-[65%]">
                    Beyond templates— I use Webflow to craft bespoke digital
                    stages, infusing interactivity that captivates at every
                    click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MidContainer>
      </div>
    </section>
  );
}
