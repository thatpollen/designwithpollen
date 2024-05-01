import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/scroll/SmoothScroll";

const aeonik = localFont({
  src: [
    {
    path: "/fonts/Aeonik-Thin.woff",
    weight: "100"
,   style: "normal"
    },

     {
    path: "/fonts/Aeonik-Light.woff",
    weight: "300"
,   style: "normal"
    },
    
    {
    path: "/fonts/Aeonik-Regular.woff",
    weight: "400"
,   style: "normal"
    },

    {
    path: "/fonts/Aeonik-Medium.woff",
    weight: "500"
,   style: "normal"
    },

    {
    path: "/fonts/Aeonik-Bold.woff",
    weight: "700"
,   style: "normal"
    },

    {
    path: "/fonts/Aeonik-Black.woff",
    weight: "900"
,   style: "normal"
    }
],
display: "swap"
})

export const metadata: Metadata = {
  title: "Freelance Designer (UX/UI) & Development | Designwithpollen.com",
  description: "Experienced Freelance UX/UI Designer & Developer with a proven track record spanning 9+ years. Passionate about creating compelling user experiences through innovative design and development solutions. Let's collaborate to bring your digital vision to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aeonik.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
