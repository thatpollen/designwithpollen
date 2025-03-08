import { framerProjects } from "@/devprojects/framer-projects";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FramerProject() {
  return (
    <main className="bg-zinc-950 text-zinc-50 h-full">
      <div className="py-24">
        <div className="grid grid-cols-1 min-[56rem]:grid-cols-3 gap-3 px-6">
          {framerProjects?.slice(0, 3)?.map((project, index) => (
            <div
              className="rounded-4xl overflow-hidden bg-neutral-900"
              key={index}
            >
              <figure className="aspect-3/2">
                <video
                  className="max-w-full w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={project?.imgSource} type="video/mp4" />
                </video>
              </figure>
              <div className="p-6 flex flex-col items-start gap-4">
                <div className="w-full flex justify-between items-center">
                  <span className="text-lg font-medium text-white">
                    {project?.name}
                  </span>
                  <span className="font-playwrite text-brand text-xs">
                    year {project?.projectYear}
                  </span>
                </div>
                <NextLink href={`${project?.url}`}>
                  <button className="px-3 py-2 rounded-xl border border-[rgba(255,255,255,0.12)] text-xs font-medium text-white cursor-pointer hover:bg-zinc-800 flex items-center gap-1">
                    Live link
                    <ArrowUpRight size={16} />
                  </button>
                </NextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
