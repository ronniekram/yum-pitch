import type { AppProps } from "next/app";
import Head from "next/head";
import tw, { styled, css } from "twin.macro";

import GlobalStyles from "@/styles/global";
import { sans, display, roundkey } from "@/utility/fonts";

import "@/styles/globals.css";

const style = css`
  inline-size: 100vw;
  min-block-size: 100dvh;
  ${tw`overflow-x-hidden`};
  ${tw`flex relative z-10`};
  ${tw`bg-transparent antialiased`};

  .use-spring-carousel-main-wrapper {
    ${tw`w-screen h-[fit-content]`};
  }
`;

const Static = styled.div`
  ${tw`fixed z-0 opacity-30`};
  ${tw`top-[-50%] left-[-50%] right-[-50%] bottom-[-50%]`};
  ${tw`w-[200%] h-[200vh]`};
  background: #212121 url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
  animation: bg-animation .2s infinite;
  opacity: .9;
  visibility: visible;

  @keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YUMYUMBLOODGUN</title>
      </Head>
      <GlobalStyles />
      <Static />
      <main
        className={`${sans.variable} ${display.variable} ${roundkey.variable}`}
        css={style}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
