import SmallContainer from "@/components/ui/layout/SmallContainer";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section>
      <SmallContainer>
        <div className="flex flex-col justify-center items-center py-32 sm:gap-12">
          <p className="text-xs leading-[1.5] font-light">
            All works by Pollen @{currentYear}
          </p>
        </div>
      </SmallContainer>
    </section>
  );
}
