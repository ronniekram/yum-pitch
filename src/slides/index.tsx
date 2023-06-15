/* eslint-disable react/jsx-key */
import Image from "next/image";
import "twin.macro";

import Intro from "@/slides/001-intro";
import GameplayIntro from "@/slides/003-intro";
import GameplaySlide from "@/slides/006-gameplay"; // 3 - 5
import History from "@/slides/012-history";
import Roadmap from "@/slides/013-roadmap";
import Advantages from "@/slides/009-unique";
import Influences from "@/slides/004-influence";
import Visuals from "@/slides/005-visuals";
import Compare from "@/slides/014-compare";
import Platforms from "@/slides/016-platforms";
import Asking from "@/slides/018-ask";
import AboutUs from "@/slides/019-about";

const gameplay = {
  one: {
    body: (
      <>
        <span tw="font-bold">Yum Yum Bloodgun</span> harnesses the <span tw="font-bold">tension</span> of fighting games without forcing players to read intimidating movelists or remember combos; at the same time, YYBG appeals to the existing market of die-hards by merging fluid combat with an innovative perk system that encourages replayability.
      </>
    ),
    media: (
      <div tw="flex">

      </div>
    ),
  },
  two: {
    body: (
      <>
        Players begin each round with <span tw="font-bold">three bullets</span>, reloading one bullet upon successfully landing a strike with their sword. Utilizing dashes, bullet parries, and perks obtained over the course of play, players are ensured that each match is both fast-paced and never the same.
      </>
    ),
    media: (
      <div tw="flex order-[-1] border-2 border-white">
        <Image
          src="/images/round-1.png"
          width={1280}
          height={720}
          alt=""
        />
      </div>
    ),
  },
  three: {
    body: (
      <>
        Upon losing a round, the losing player chooses from one of several <span tw="font-bold">blessings</span> that alter their moveset, such as making bullets explode on impact, empowering their sword, or
      </>
    ),
    media: (
      <div tw="flex order-[-1]">
        <Image
          src="/images/round-1.png"
          width={1280}
          height={720}
          alt=""
        />
      </div>
    ),
  },
};

export const slides = [
  <Intro />,
  <GameplayIntro />,
  <GameplaySlide
    body={gameplay.one.body}
    media={gameplay.one.media}
  />,
  <GameplaySlide
    body={gameplay.two.body}
    media={gameplay.two.media}
  />,
  <GameplaySlide
    body={gameplay.three.body}
    media={gameplay.three.media}
  />,
  <History />,
  <Roadmap />,
  <Advantages />,
  <Influences />,
  <Visuals />,
  <Compare />,
  <Platforms />,
  <Asking />,
  <AboutUs />,
];
