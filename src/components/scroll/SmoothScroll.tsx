'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

type SmoothScrollProps = {
  children: React.ReactNode;
};

function SmoothScroll({children}: SmoothScrollProps) {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  });

  return(
    <ReactLenis 
     root
     options={{
       lerp: 0.2,
       wheelMultiplier: 0.6,
       infinite: false,
       gestureOrientation: "vertical",
      //  normalizeWheel: false,
      //  smoothTouch: false,
     }}>
      { children }
     </ReactLenis>
  )
}

export default SmoothScroll;