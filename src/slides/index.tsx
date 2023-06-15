/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import tw, { styled } from "twin.macro";

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

const CardWrap = styled(a.div)`
  drop-shadow: 0px, 10px, 16px rgba(33, 33, 33, 0.25);
  ${tw`flex relative`};
  ${tw`border-2 border-white rounded-2xl`};
  ${tw`w-[14.0625rem] h-[19.1875rem]`};
  ${tw`md:(w-[17.1875rem] h-[23.5rem])`};
  ${tw`lg:(w-[21.875rem] h-[29.875rem])`};
  ${tw`xl:(w-[25rem] h-[34.125rem])`};
`;

const PlayerOne = styled.div`
  ${tw`flex w-[20.9375rem] h-[11.6875rem]`};
  ${tw`md:(w-[23.4375rem] h-[13.0625rem])`};
  ${tw`lg:(w-[28.125rem] h-[15.6875rem])`};
  ${tw`xl:(w-[31.25rem] h-[17.25rem])`};
`;

const Card = ({ src, alt }: { src: string; alt: string; }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const spring = useSpring({
    transform: isHover ? `scale(1.2)` : `scale(1)`,
    zIndex: isHover ? 30 : 10,
  });

  return (
    <CardWrap
      style={spring}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={450}
        height={623}
        style={{ objectFit: `cover`, objectPosition: `center` }}
      />
    </CardWrap>
  );
};

const Perks = () => {
  return (
    <div tw="w-full flex ">
      {/* <Card src="/images/card-1.png" alt="" /> */}
      <Card src="/images/card-2.png" alt="" />
      {/* <Card src="/images/card-3.png" alt="" /> */}
    </div>
  );
};

const gameplay = {
  one: {
    title: `Gameplay`,
    body: (
      <>
        <span tw="font-bold">Yum Yum Bloodgun</span> harnesses the <span tw="font-bold">tension</span> of fighting games without forcing players to read intimidating movelists or remember combos; at the same time, YYBG appeals to the existing market of die-hards by merging fluid combat with an innovative perk system that encourages replayability.
      </>
    ),
    media: (
      <PlayerOne>
        <Image
          src="/images/character-1.gif"
          alt=""
          width={1232}
          height={686}
        />
      </PlayerOne>
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
    media: <Perks />,
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
