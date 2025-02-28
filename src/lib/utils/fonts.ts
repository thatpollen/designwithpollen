import localFont from "next/font/local";

export const aeonik = localFont({
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

export const zigzagNotRounded = localFont({
  src: [{ path: "/fonts/ZIGZAG-NotRounded.woff2", style: "normal" }],
});

export const zigzagRounded = localFont({
  src: [{ path: "/fonts/ZIGZAG-Rounded.woff2", style: "normal" }],
});
