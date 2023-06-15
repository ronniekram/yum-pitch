/* eslint-disable react/jsx-key */
import Image from "next/image";
import "twin.macro";

import Intro from "@/slides/001-intro";
import Elevator from "@/slides/002-elevator";
import GameplayIntro from "@/slides/003-intro";
import Influences from "@/slides/004-influence";
import Visuals from "@/slides/005-visuals";
import GameplaySlide from "@/slides/006-gameplay";
import Advantages from "@/slides/009-unique";
import SinglePlayer from "@/slides/010-single-player";
import Expressions from "@/slides/011-expression";
import History from "@/slides/012-history";
import Roadmap from "@/slides/013-roadmap";
import Compare from "@/slides/014-compare";
import Trends from "@/slides/015-trends";
import Platforms from "@/slides/016-platforms";
import Post from "@/slides//017-post";
import Asking from "@/slides/018-ask";
import AboutUs from "@/slides/019-about";

const gameplay = {
  one: {
    title: `Gameplay`,
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
    title: `Gameplay - Combat`,
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
    title: `Gameplay - Perks`,
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
  <Elevator />,
  <GameplayIntro />,
  <Influences />,
  <Visuals />,
  <GameplaySlide
    title={gameplay.one.title}
    body={gameplay.one.body}
    media={gameplay.one.media}
  />,
  <GameplaySlide
    title={gameplay.two.title}
    body={gameplay.two.body}
    media={gameplay.two.media}
  />,
  <GameplaySlide
    title={gameplay.three.title}
    body={gameplay.three.body}
    media={gameplay.three.media}
  />,
  <Advantages />,
  <SinglePlayer />,
  <Expressions />,
  <History />,
  <Roadmap />,
  <Compare />,
  <Trends />,
  <Platforms />,
  <Post />,
  <Asking />,
  <AboutUs />,
];
