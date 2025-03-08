import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import { GoogleTagManager } from "@next/third-parties/google";
import { inter } from "@/lib/utils/fonts";
import Loader from "@/components/ui/assets/Loader";

export const metadata: Metadata = {
  title: "Product designer and developer",
  description:
    "Experienced Freelance UX/UI Designer & Developer with a proven track record spanning 9+ years. Passionate about creating compelling user experiences through innovative design and development solutions. Let's collaborate to bring your digital vision to life!",
  icons: {
    icon: [
      {
        url: "/Avatar.png",
        href: "/Avatar.png",
      },
    ],
  },
  metadataBase: new URL("https://designwithpollen.com"),
  // metadataBase: new URL("https://designwithpollen.vercel.app"),
  openGraph: {
    title: "Product designer and developer",
    description:
      "Experienced Freelance UX/UI Designer & Developer with a proven track record spanning 9+ years. Passionate about creating compelling user experiences through innovative design and development solutions. Let's collaborate to bring your digital vision to life!",
    url: "https://designwithpollen.com",
    // url: "https://designwithpollen.vercel.app",
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
      </body>
    </html>
  );
}
