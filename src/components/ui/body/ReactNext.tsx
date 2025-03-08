import { ArrowUpRight, FramerIcon } from "lucide-react";
import MidContainer from "../layout/MidContainer";
import NextLink from "next/link";
import { reactProjects } from "@/devprojects/react-projects";
import { ReactIcon } from "@/components/icons/Icons";

export default function ReactNext() {
  return (
    <section>
      <MidContainer>
        <div className="w-full flex flex-col gap-12 py-24">
          <div className="flex flex-col items-stretch md:flex-row justify-between md:items-center gap-6 md:gap-0 px-6">
            <div className="max-w-[480px] flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span>
                  <ReactIcon />
                </span>
                <h5 className="text-2xl font-semibold text-white">
                  Develop with React
                </h5>
              </div>
              <p className="text-sm text-neutral-400">
                Explore my Framer development projects, where design meets
                seamless interactivity for high-performance, visually stunning
                websites.
              </p>
            </div>
            <NextLink href="/react-projects">
              <button className="self-start md:self-end px-3 py-2 rounded-xl border border-[rgba(255,255,255,0.12)] text-xs font-medium text-white cursor-pointer hover:bg-zinc-800 flex items-center gap-1">
                View all
                <ArrowUpRight size={16} />
              </button>
            </NextLink>
          </div>
          <div className="grid grid-cols-1  min-[56rem]:grid-cols-3 gap-3 px-6">
            {reactProjects?.slice(0, 3)?.map((project, index) => (
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
      </MidContainer>
    </section>
  );
}
