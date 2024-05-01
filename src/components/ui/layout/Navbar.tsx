'use client'

import Container from "@/components/ui/layout/Container";
import NextLink from "next/link";
import { WhatsApp } from "@/components/icons/Icons";
import Lottie from "lottie-react";
import { Link } from 'react-scroll';
import { useEffect } from "react";

export default function Navbar() {
  
  useEffect(() => {
    let lastScrollTop = 0;

    const navMiddle = document.querySelector('.nav_middle') as HTMLElement;
    const whatsapp = document.querySelector('.whatsapp') as HTMLElement;
    const navLeft = document.querySelector('.nav_left') as HTMLElement;
    // const navRight = document.querySelector('.nav_right') as HTMLElement;

    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop){
       navMiddle.style.width = "438px";
       whatsapp.style.transform = "translateX(0)";
       navLeft.style.transform = "translateX(-20px)";
       navLeft.style.opacity = "0";
      } else {
       navMiddle.style.width = "248px";
       whatsapp.style.transform = "translateX(8px)";
       navLeft.style.transform = "translateX(0px)";
       navLeft.style.opacity = "1";
      }
      // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] bg-dark">
     <div className="py-5 border-b border-[rgba(255,255,255,0.08)]">
      <Container>
        <div className="flex justify-between items-center">
          <NextLink 
            href="/"
            className="nav_left w-[33.33%] transition-all duration-[450ms]">
            <div>
              {/* <Lottie  
                loop={true}
                autoplay={true}
                animationData={}
                rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
                }}/> */}
                Eet
            </div>
          </NextLink>

          <div className="nav_middle flex justify-start items-center gap-2 px-1.5 py-1 overflow-hidden bg-dark border border-[rgba(255,255,255,0.12)] rounded-[40px] backdrop-blur-[5px] w-[248px] max-w-max">
            <Link   
              // activeClass="nav_active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000} 
              className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration  hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]">
              About          
            </Link>

            <Link 
              // activeClass="nav_active"
              to="works"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000} 
              className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration-100 hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]">
              Work          
            </Link>

            <Link 
              // activeClass="nav_active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000} 
              className="cursor-pointer px-4 py-2 text-sm border border-[rgba(188,237,4,0)] rounded-[32px] transition-all duration-100 hover:border hover:border-[rgba(188,237,4,0.16)] hover:bg-[rgba(188,237,4,0.08)]">
              Servies
            </Link>

            <NextLink href="/contact" className="whatsapp px-3.5 py-2 text-sm rounded-[40px] flex justify-start items-center gap-2 font-medium text-charcoal bg-limeGreen translate-x-[8px] transition-all duration-500">
              <span>
                <WhatsApp/>
              </span>
              WhatsApp
            </NextLink>
          </div>

          <div className="nav_right w-[33.33%]"></div>
        </div>
      </Container>
     </div>
    </nav>
  );
}