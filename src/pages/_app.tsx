import type { AppProps } from "next/app";
import tw, { css } from "twin.macro";

import GlobalStyles from "@/styles/global";
import { sans, display } from "@/utility/fonts";

import "@/styles/globals.css";

const style = css`
  inline-size: 100vw;
  min-block-size: 100dvh;
  ${tw`bg-black overflow-x-hidden`};
  ${tw`flex`};
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main
        className={`${sans.variable} ${display.variable}`}
        css={style}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
