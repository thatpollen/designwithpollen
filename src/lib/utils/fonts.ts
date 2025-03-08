import localFont from "next/font/local";
import { Inter, Ceviche_One } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const cevicheOne = Ceviche_One({
  variable: "--font-ceviche-one",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
