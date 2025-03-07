import NextImage from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { inter } from "@/lib/utils/fonts";

interface AboutDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AboutDialog({ isOpen, setIsOpen }: AboutDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} data-lenis-prevent>
      <DialogContent
        className="w-[98vw] h-[98vh] overflow-y-auto"
        data-lenis-prevent
      >
        <div className="max-w-[680px] mx-auto p-12 bg-white rounded-4xl relative">
          <DialogClose className="text-neutral-900 absolute z-[101] right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 cursor-pointer disabled:pointer-events-none focus:outline-none focus:ring-0">
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="flex flex-col gap-6">
            <DialogHeader className="text-neutral-900">
              <DialogTitle className="">About me</DialogTitle>
              <DialogDescription className="">
                Hello there! I&apos;m Pollen Chakma, a product designer and
                front-end developer from Rangamati, near the India and Myanmar
                border.
              </DialogDescription>

              <div className="flex gap-2">
                <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                  <NextImage
                    src="/profile/profile-4.jpg"
                    alt="profile-img"
                    width={288}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </figure>
                <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                  <NextImage
                    src="/profile/profile-3.jpg"
                    alt="profile-img"
                    width={288}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </figure>
              </div>
              <p className="text-base">
                My journey started about 10 years ago as an email developer
                through freelance work. Three years later, I transitioned into
                UX/UI design. Recently, I&apos;ve expanded my skills to include
                JavaScript, React, Next.js, Tailwind, and Storybook, which
                allows me to work more closely on product design and
                development. Over the years, I&apos;ve collaborated with various
                web3 startups like Jigstack, Precog Finance, Ambidex, Fringe,
                and Biga Arcade etc. I love to explore micro-interactions that
                enhance user experience, making products not just usable but
                also enjoyable.
              </p>
              <div className="flex gap-2">
                <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                  <NextImage
                    src="/profile/profile-1.jpg"
                    alt="profile-img"
                    width={288}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </figure>
                <figure className="rounded-2xl grayscale hover:grayscale-0 duration-200 transition-colors overflow-hidden aspect-3/4">
                  <NextImage
                    src="/profile/profile-2.jpg"
                    alt="profile-img"
                    width={288}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </figure>
              </div>
              <p className="text-base">
                In my experience, many businesses struggle with fragmented
                design and development processes, often resulting in products
                that are visually polished but technically inefficient—or vice
                versa. This disconnect can lead to longer development cycles,
                increased costs, and subpar user experiences. To address this
                issue, I create structured design systems that align closely
                with development workflows to ensure consistency and efficiency
                from the outset.
              </p>

              <p className="text-base">
                My approach involves developing comprehensive design systems
                that standardize UI components, typography, and styling using
                design tokens. These systems make scaling and maintenance easier
                while ensuring visual and functional consistency across
                platforms. Beyond documentation, I collaborate directly with
                developers to ensure seamless design-to-code
                translation—minimizing last-minute changes and optimizing the
                development process. This structured methodology helps
                businesses launch products faster while maintaining quality,
                consistency, and delivering exceptional user experiences.
              </p>
            </DialogHeader>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
