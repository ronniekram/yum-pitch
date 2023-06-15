import localFont from "next/font/local";

export const sans = localFont({
  src: [
    {
      path: "./parachute/regular.ttf",
      weight: "400",
    },
    {
      path: "./parachute/semi.ttf",
      weight: "600",
    },
    {
      path: "./parachute/bold.ttf",
      weight: "700",
    },
    {
      path: "./parachute/xbold.ttf",
      weight: "800",
    },
  ],
  variable: "--sans",
});

export const display = localFont({
  src: [
    {
      path: "./built-tilting/regular.otf",
      weight: "400",
    },
    {
      path: "./built-tilting/semi.otf",
      weight: "600",
    },
    {
      path: "./built-tilting/bold.otf",
      weight: "700",
    },
  ],
  variable: "--display",
});

export const roundkey = localFont({
  src: [
    {
      path: "./Sovereign.ttf",
      weight: "400",
    },
  ],
  variable: "--roundkey",
});
