"use client";

import { Fragment } from "react";
import Container from "../layout/Container";
import { Close } from "../../icons/Icons";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation";
import { transitionClasses } from "@/lib/transitions";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClose = () => router.back();

  const pathname = usePathname();
  if (pathname === "/") return null;

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
          <div className="flex justify-end xl:justify-center items-center px-12 py-6 w-full h-full">
            <TransitionChild as={Fragment} {...transitionClasses}>
              <DialogPanel
                data-lenis-prevent
                as="div"
                className="modal flex flex-col w-full h-full max-w-[1024px] overflow-y-auto relative z-[11] bg-white rounded-lg"
              >
                <div className="close_btn flex justify-end items-stretch py-6 px-8 sticky top-0 z-[12] bg-white border-b border-[rgba(0,0,0,0.08)]">
                  <button
                    onClick={handleClose}
                    className="flex justify-start items-center gap-2 cursor-pointer"
                  >
                    <span className="text-black">Close</span>
                    <span>
                      <Close />
                    </span>
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
