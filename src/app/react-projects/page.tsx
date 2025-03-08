import { reactProjects } from "@/devprojects/react-projects";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ReactProject() {
  return (
    <main className="bg-zinc-950 text-zinc-50 h-full">
      <div className="py-24">
        <div className="grid grid-cols-1  min-[56rem]:grid-cols-3 gap-3 px-6">
          {reactProjects?.map((project, index) => (
            <div
              className="rounded-3xl overflow-hidden bg-neutral-900"
              key={index}
            >
              <figure className="aspect-3/2 rounded-t-2xl bg-[conic-gradient(from_180deg_at_50%_50%,_#4F46E5_0deg,_#818CF8_360deg)]">
                {/* <NextImage
                    src={`${project?.imgSource}`}
                    alt={`${project?.name}`}
                    width={768}
                    // height={1024}
                    height={512}
                    className="max-w-full w-full h-full"
                    priority
                  /> */}
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
