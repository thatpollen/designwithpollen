import Container from "../layout/Container";

export default function VerticalLines() {
  return(
    <div className="mx-auto fixed inset-0 z-[-1]">
      <Container>
        <div className="flex justify-between items-stretch">
          <div className="w-px h-screen bg-[rgba(255,255,255,0.08)]"></div>
          <div className="w-px h-screen bg-[rgba(255,255,255,0.08)]"></div>
          <div className="w-px h-screen bg-[rgba(255,255,255,0.08)]"></div>
        </div>
      </Container>
    </div>
  )
}