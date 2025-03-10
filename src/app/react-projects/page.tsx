import { reactProjects } from "@/devprojects/react-projects";
import NextLink from "next/link";
import { ArrowUp } from "lucide-react";
import MidContainer from "@/components/ui/layout/MidContainer";
import CustomCursor from "@/components/ui/assets/CustomCursor";
import Navbar from "@/components/ui/layout/Navbar";
import { ReactIcon } from "@/components/icons/Icons";
import Footer from "@/components/ui/layout/Footer";
import { LinkArrowButton } from "@/components/ui/button/LinkArrowButton";

export default function ReactProject() {
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
                    <ReactIcon />
                  </span>
                  <h5 className="text-2xl font-semibold text-white text-center">
                    Developed with React
                  </h5>
                </div>
                <p className="text-sm text-neutral-400 text-center">
                  Showcasing my work built with React, highlighting dynamic,
                  responsive, and user-friendly websites.
                </p>
              </div>
            </div>
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
                      <LinkArrowButton
                        text="Live link"
                        deg={45}
                        className="px-3 py-2 rounded-xl border border-[rgba(255,255,255,0.12)] text-xs font-medium text-white cursor-pointer hover:bg-zinc-800 flex items-center gap-1"
                      >
                        <ArrowUp size={16} />
                      </LinkArrowButton>
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
