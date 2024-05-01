import Container from "@/components/ui/layout/Container";
import SmallContainer from "@/components/ui/layout/SmallContainer";

export default function Works() {
  return(
    <section id="works">
      <div className="py-[232px] relative border-b border-[rgba(255,255,255,0.08)] rounded overflow-hidden">
        <div className="gradient_line w-[24%] h-px absolute left-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(255,203,67,0)] via-[rgba(188,237,4,0.5)] to-[#bced04]"></div>
        <SmallContainer>
          <div className="grid grid-cols-3 gap-4 pb-16">
            <div className="col-span-1">
               <span className='text-sm opacity-40 uppercase'>Projects</span>
            </div>
            <div className="col-start-2 col-end-4">
              <div className="flex flex-col gap-6">
               <h2 className="text-h2 font-normal">Highlighted Projects</h2>
               <p className='w-4/5'>Here, I showcase a curated collection of standout projects, demonstrating my expertise and creative abilities in action.</p>
              </div>
            </div>
          </div>
        </SmallContainer>
        <Container>
          <div></div>
        </Container>
      </div>
    </section>
  )
}