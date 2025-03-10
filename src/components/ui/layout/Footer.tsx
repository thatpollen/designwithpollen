import MidContainer from "@/components/ui/layout/MidContainer";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { LinkArrowButton } from "../button/LinkArrowButton";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section>
      <MidContainer>
        <div className="flex flex-col pt-16 sm:pt-24 pb-6 gap-32 border-t border-neutral-900">
          <div className="w-full flex flex-col justify-between items-stretch gap-12 sm:flex-row sm:gap-0 sm:items-center">
            <div className="flex flex-col gap-12">
              <h2 className="font-semibold text-4xl sm:text-5xl leading-[52.8px] text-white">
                Let&apos;s work together
              </h2>
              <Link href="mailto:talkspollen@gmail.com">
                <LinkArrowButton
                  text="Contact me"
                  deg={45}
                  className="bg-brand px-3 py-2 flex items-center gap-1 border border-[rgba(255,255,255,0.12)] rounded-xl text-xs font-semibold leading-[18px] text-neutral-900 cursor-pointer hover:bg-lime-500"
                >
                  <ArrowUp size={16} />
                </LinkArrowButton>
              </Link>
            </div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="https://x.com/home" legacyBehavior>
                  <a target="_blank">
                    <LinkArrowButton
                      text="Twitter"
                      deg={45}
                      className="flex items-center gap-1 text-sm leading-[18px] text-white hover:text-lime-400"
                    >
                      <ArrowUp size={16} />
                    </LinkArrowButton>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/thatpollen/"
                  legacyBehavior
                >
                  <a target="_blank">
                    <LinkArrowButton
                      text="Linkedin"
                      deg={45}
                      className="flex items-center gap-1 text-sm leading-[18px] text-white hover:text-lime-400"
                    >
                      <ArrowUp size={16} />
                    </LinkArrowButton>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://dribbble.com/thatpollen" legacyBehavior>
                  <a target="_blank">
                    <LinkArrowButton
                      text="Dribbble"
                      deg={45}
                      className="flex items-center gap-1 text-sm leading-[18px] text-white hover:text-lime-400"
                    >
                      <ArrowUp size={16} />
                    </LinkArrowButton>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/thatpollen" legacyBehavior>
                  <a target="_blank">
                    <LinkArrowButton
                      text="Github"
                      deg={45}
                      className="flex items-center gap-1 text-sm leading-[18px] text-white hover:text-lime-400"
                    >
                      <ArrowUp size={16} />
                    </LinkArrowButton>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.upwork.com/freelancers/~01ce9be5982711e917"
                  legacyBehavior
                >
                  <a target="_blank">
                    <LinkArrowButton
                      text="Upwork"
                      deg={45}
                      className="flex items-center gap-1 text-sm leading-[18px] text-white hover:text-lime-400"
                    >
                      <ArrowUp size={16} />
                    </LinkArrowButton>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-xs leading-[18px] font-light text-neutral-300">
            © {currentYear}. All Rights Reserved
          </p>
        </div>
      </MidContainer>
    </section>
  );
}
