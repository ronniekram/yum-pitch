import type { AppProps } from "next/app";
import "twin.macro";

import GlobalStyles from "@/styles/global";
import { sans, display } from "@/utility/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main
        className={`${sans.variable} ${display.variable}`}
        tw="bg-black w-screen min-h-screen flex overflow-hidden"
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
