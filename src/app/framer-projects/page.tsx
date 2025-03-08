import { framerProjects } from "@/devprojects/framer-projects";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import MidContainer from "@/components/ui/layout/MidContainer";
import { FramerIcon } from "lucide-react";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";
import CustomCursor from "@/components/ui/assets/CustomCursor";

export default function FramerProject() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <div className="pt-12 pb-24">
        <MidContainer>
          <div className="flex flex-col gap-12">
            <div className="w-full">
              <div className="max-w-[480px] mx-auto flex flex-col items-center gap-2.5">
                <div className="flex gap-2 items-center">
                  <span>
                    <FramerIcon className="fill-white" size={16} />
                  </span>
                  <h5 className="text-2xl font-semibold text-white text-center">
                    Developed with Framer
                  </h5>
                </div>
                <p className="text-sm text-neutral-400 text-center">
                  Explore my Framer development projects, where design meets
                  seamless interactivity for high-performance, visually stunning
                  websites.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 min-[56rem]:grid-cols-3 gap-3 px-6">
              {framerProjects?.slice(0, 3)?.map((project, index) => (
                <div
                  className="rounded-3xl overflow-hidden bg-neutral-900"
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
        </MidContainer>
      </div>
      <Footer />
    </main>
  );
}
