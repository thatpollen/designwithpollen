"use client";

import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation";
import { transitionClasses } from "@/lib/transitions";
import { useState } from "react";
import { X } from "lucide-react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  if (pathname === "/") return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1001]"
        onClose={handleClose}
        // role="dialog"
        data-lenis-prevent
      >
        <div className="s-modal flex justify-center items-center gap-4 fixed inset-0 z-[1001]">
          {/* <Container> */}
          <div className="flex justify-center items-center p-4 sm:p-6 bg-[rgba(9,9,11,0.72)] backdrop-blur-2xl w-full h-full">
            <TransitionChild
              as={Fragment}
              enter={transitionClasses.enter}
              enterFrom={transitionClasses.enterFrom}
              enterTo={transitionClasses.enterTo}
              leave={transitionClasses.leave}
              leaveFrom={transitionClasses.leaveFrom}
              leaveTo={transitionClasses.leaveTo}
            >
              <DialogPanel
                data-lenis-prevent
                as="div"
                className="modal flex flex-col w-full h-full max-w-[1024px] overflow-y-auto relative z-[11] bg-white rounded-2xl"
              >
                <div className="close_btn flex justify-end items-stretch py-4 px-4 sticky top-0 z-[12] bg-white border-b border-zinc-200">
                  <button
                    onClick={handleClose}
                    className="flex justify-start items-center gap-2 cursor-pointer text-zinc-950"
                  >
                    Close
                    <X className="mt-0.5" size={20} />
                  </button>
                </div>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
          {/* </Container> */}
        </div>
      </Dialog>
    </Transition>
  );
}
