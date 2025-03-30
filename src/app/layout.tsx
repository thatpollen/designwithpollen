import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import { GoogleTagManager } from "@next/third-parties/google";
import { inter } from "@/lib/utils/fonts";
import Loader from "@/components/ui/assets/Loader";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Product Designer and Developer",
  description:
    "Hello there! I'm Pollen Chakma, a product designer and front-end developer from Rangamati, near the India and Myanmar border. My journey started about 10 years ago as an email developer through freelance work. Three years later, I transitioned into UX/UI design. Recently, I've expanded my skills to include JavaScript, React, Next.js, Tailwind, and Storybook, which allows me to work more closely on product design and development. Over the years, I've collaborated with various web3 startups like Jigstack, Precog Finance, Ambidex, Fringe, and Biga Arcade etc. I love to explore micro-interactions that enhance user experience, making products not just usable but also enjoyable.",
  icons: {
    icon: [
      {
        url: "/Avatar.png",
        href: "/Avatar.png",
      },
    ],
  },
  metadataBase: new URL("https://designwithpollen.com"),
  openGraph: {
    title: "Product Designer and Developer",
    description:
      "Hello there! I'm Pollen Chakma, a product designer and front-end developer from Rangamati, near the India and Myanmar border. My journey started about 10 years ago as an email developer through freelance work. Three years later, I transitioned into UX/UI design. Recently, I've expanded my skills to include JavaScript, React, Next.js, Tailwind, and Storybook, which allows me to work more closely on product design and development. Over the years, I've collaborated with various web3 startups like Jigstack, Precog Finance, Ambidex, Fringe, and Biga Arcade etc. I love to explore micro-interactions that enhance user experience, making products not just usable but also enjoyable.",
    url: "https://designwithpollen.com",
    siteName: "Design with Pollen",
    images: {
      url: "/opengraph-image.png",
      width: 1280,
      height: 672,
      alt: "Design with Pollen",
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K33NPCH" />
      <body
        className={`${inter.variable} antialiased text-zinc-50 bg-zinc-950`}
      >
        <SmoothScroll>
          <Loader />
          {children}
          {modal}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
