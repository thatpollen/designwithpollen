import NextImage from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { transitionClasses } from "@/lib/transitions";
import { Fragment } from "react";

interface AboutDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AboutDialog({ isOpen, setIsOpen }: AboutDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1001]"
        onClose={() => setIsOpen(false)}
        // role="dialog"
        data-lenis-prevent
      >
        <div className="s-modal flex justify-center items-center gap-4 fixed inset-0 z-[1001]">
          {/* <Container> */}
          <div className="flex justify-center items-center p-4 sm:p-6 bg-[rgba(9,9,11,0.72)] backdrop-blur-2xl w-full h-full">
            <TransitionChild as={Fragment} {...transitionClasses}>
              <DialogPanel
                data-lenis-prevent
                as="div"
                className="modal flex flex-col w-full h-full max-w-[780px] overflow-y-auto relative z-[11] bg-white rounded-2xl p-12"
              >
                <div className="flex flex-col gap-6 text-neutral-900">
                  <div className="flex justify-between items-center">
                    <h5 className="text-2xl font-semibold tracking-normal">
                      About me
                    </h5>
                    <button
                      className="text-neutral-900  rounded-sm cursor-pointer disabled:pointer-events-none focus:outline-none focus:ring-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-base">
                    Hello there! I&apos;m Pollen Chakma, a product designer and
                    front-end developer from Rangamati, near the India and
                    Myanmar border.
                  </p>

                  <div className="flex gap-2">
                    <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                      <NextImage
                        src="/profile/profile-4.jpg"
                        alt="profile-img"
                        width={1023}
                        height={1364}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </figure>
                    <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                      <NextImage
                        src="/profile/profile-3.jpg"
                        alt="profile-img"
                        width={1023}
                        height={1364}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </figure>
                  </div>
                  <p className="text-base">
                    My journey started about 10 years ago as an email developer
                    through freelance work. Three years later, I transitioned
                    into UX/UI design. Recently, I&apos;ve expanded my skills to
                    include JavaScript, React, Next.js, Tailwind, and Storybook,
                    which allows me to work more closely on product design and
                    development. Over the years, I&apos;ve collaborated with
                    various web3 startups like Jigstack, Precog Finance,
                    Ambidex, Fringe, and Biga Arcade etc. I love to explore
                    micro-interactions that enhance user experience, making
                    products not just usable but also enjoyable.
                  </p>
                  <div className="flex gap-2">
                    <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                      <NextImage
                        src="/profile/profile-1.JPG"
                        alt="profile-img"
                        width={1023}
                        height={1364}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </figure>
                    <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                      <NextImage
                        src="/profile/profile-2.jpg"
                        alt="profile-img"
                        width={1023}
                        height={1364}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </figure>
                  </div>
                  <p className="text-base">
                    In my experience, many businesses struggle with fragmented
                    design and development processes, often resulting in
                    products that are visually polished but technically
                    inefficient—or vice versa. This disconnect can lead to
                    longer development cycles, increased costs, and subpar user
                    experiences. To address this issue, I create structured
                    design systems that align closely with development workflows
                    to ensure consistency and efficiency from the outset.
                  </p>

                  <p className="text-base">
                    My approach involves developing comprehensive design systems
                    that standardize UI components, typography, and styling
                    using design tokens. These systems make scaling and
                    maintenance easier while ensuring visual and functional
                    consistency across platforms. Beyond documentation, I
                    collaborate directly with developers to ensure seamless
                    design-to-code translation—minimizing last-minute changes
                    and optimizing the development process. This structured
                    methodology helps businesses launch products faster while
                    maintaining quality, consistency, and delivering exceptional
                    user experiences.
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
          {/* </Container> */}
        </div>
      </Dialog>
    </Transition>
  );
}
