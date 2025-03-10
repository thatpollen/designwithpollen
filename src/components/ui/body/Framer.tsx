import { FramerIcon } from "lucide-react";
import MidContainer from "../layout/MidContainer";
import NextLink from "next/link";
import { framerProjects } from "@/devprojects/framer-projects";
import { Wand } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { LinkArrowButton } from "../button/LinkArrowButton";

export default function Framer() {
  return (
    <section>
      <MidContainer>
        <div className="w-full flex flex-col gap-6 sm:gap-12 py-24">
          <div className="flex flex-col items-stretch md:flex-row justify-between md:items-center gap-6 md:gap-0">
            <div className="max-w-full sm:max-w-[480px] flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span>
                  <FramerIcon className="fill-white" size={16} />
                </span>
                <h5 className="text-2xl font-semibold text-white">
                  Developed with Framer
                </h5>
              </div>
              <p className="text-sm text-neutral-400">
                Explore my Framer development projects, where design meets
                seamless interactivity for high-performance, visually stunning
                websites.
              </p>
            </div>
            <NextLink href="/framer-projects">
              <LinkArrowButton
                text="View all"
                deg={45}
                className="self-start md:self-end px-3 py-2 rounded-xl border border-zinc-700 text-sm font-medium text-zinc-50 cursor-pointer hover:bg-zinc-800 flex items-center gap-1"
              >
                <ArrowUp size={20} />
              </LinkArrowButton>
            </NextLink>
          </div>

          <div className="grid grid-cols-1 min-[56rem]:grid-cols-3 gap-3">
            {framerProjects?.slice(0, 3)?.map((project, index) => (
              <div
                className="rounded-3xl overflow-hidden bg-neutral-900"
                key={index}
              >
                <figure className="aspect-3/2">
                  <video
                    className="max-w-full w-auto h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project?.webmSource} type="video/mp4" />
                    <source src={project?.mp4Source} type="video/mp4" />
                  </video>
                </figure>
                <div className="px-4 py-6 flex flex-col items-start gap-4">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-lg font-medium text-white">
                      {project?.name}
                    </span>
                    <span className="font-playwrite text-brand text-xs">
                      year {project?.projectYear}
                    </span>
                  </div>
                  {/* Between buttons */}
                  <div className="flex justify-between items-center w-full">
                    {/* Remix button */}
                    <NextLink href={`${project?.url}`} legacyBehavior>
                      <a target="_blank">
                        <button className="px-3 py-2 rounded-xl text-sm font-medium text-white cursor-pointer flex items-center gap-1 border border-zinc-800 hover:bg-zinc-800">
                          <Wand size={20} /> Remix
                        </button>
                      </a>
                    </NextLink>
                    {/* Preview button */}
                    <NextLink href={`${project?.previewUrl}`} legacyBehavior>
                      <a target="_blank">
                        <LinkArrowButton
                          text="Preview"
                          deg={45}
                          className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-950 cursor-pointer bg-brand hover:bg-lime-500 flex items-center gap-1"
                        >
                          <ArrowUp size={20} />
                        </LinkArrowButton>
                      </a>
                    </NextLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MidContainer>
    </section>
  );
}
