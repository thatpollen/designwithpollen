import Container from "@/components/ui/layout/Container";
import MidContainer from "@/components/ui/layout/MidContainer";

export default function Works({ children }: { children: React.ReactNode }) {
  return (
    <section id="works">
      <div className="py-24 relative rounded overflow-hidden md:py-16 xs:py-12">
        <MidContainer>
          {/* Inner container */}
          <div className="max-w-[580px] mx-auto flex flex-col gap-4 pb-16">
            {/* title */}
            <h5 className="text-2xl text-center font-semibold">
              Highlighted Projects
            </h5>
            {/* subtext */}
            <p className="text-center text-zinc-400">
              Here, I showcase a curated collection of standout projects,
              demonstrating my expertise and creative abilities in action.
            </p>
          </div>
        </MidContainer>
        {/* <Container>{children}</Container> */}
        <MidContainer>{children}</MidContainer>
      </div>
    </section>
  );
}
