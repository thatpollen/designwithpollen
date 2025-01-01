import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import { GoogleTagManager } from "@next/third-parties/google";

const aeonik = localFont({
  src: [
    {
      path: "/fonts/Aeonik-Thin.woff",
      weight: "100",
      style: "normal",
    },

    {
      path: "/fonts/Aeonik-Light.woff",
      weight: "300",
      style: "normal",
    },

    {
      path: "/fonts/Aeonik-Regular.woff",
      weight: "400",
      style: "normal",
    },

    {
      path: "/fonts/Aeonik-Medium.woff",
      weight: "500",
      style: "normal",
    },

    {
      path: "/fonts/Aeonik-Bold.woff",
      weight: "700",
      style: "normal",
    },

    {
      path: "/fonts/Aeonik-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freelance Designer (UX/UI) & Development | Designwithpollen.com",
  description:
    "Experienced Freelance UX/UI Designer & Developer with a proven track record spanning 9+ years. Passionate about creating compelling user experiences through innovative design and development solutions. Let's collaborate to bring your digital vision to life!",
  // metadataBase: new URL("https://designwithpollen.com"),
  metadataBase: new URL("https://designwithpollen.vercel.app"),
  openGraph: {
    title: "Freelance Designer (UX/UI) & Development | Designwithpollen.com",
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
      <body className={aeonik.className}>
        <SmoothScroll>
          {children}
          {modal}
        </SmoothScroll>
      </body>
    </html>
  );
}
