import Container from "@/components/ui/layout/Container";
import MidContainer from "@/components/ui/layout/MidContainer";

export default function Works({ children }: { children: React.ReactNode }) {
  return (
    <section id="works">
      <div className="relative rounded overflow-hidden flex flex-col gap-12 py-12 sm:py-24">
        <MidContainer>
          {/* Inner container */}
          <div className="max-w-[580px] mx-auto flex flex-col gap-3">
            {/* title */}
            <h5 className="text-2xl text-center font-semibold">
              Web3 highlighted projects
            </h5>
            {/* subtext */}
            <p className="text-center text-zinc-400">
              Here are a few selected case studies showcasing my work—where
              strategy, design, and technology come together to create impactful
              digital experiences.
            </p>
          </div>
        </MidContainer>
        {/* <Container>{children}</Container> */}
        <MidContainer>{children}</MidContainer>
      </div>
    </section>
  );
}
