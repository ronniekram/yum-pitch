import { useState, useEffect } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useSpring, animated as a, config } from "react-spring";
import { useWindowSize } from "react-use";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Haircuts = styled(a.div)`
  ${tw`flex rounded-full overflow-hidden`};
  ${tw`border-[1.5px] border-white`};
  ${tw`absolute z-10 right-0`};
  ${tw`md:(bottom-0) 2xl:(mr-6)`};
  ${tw`w-[9.375rem] h-[9.375rem]`};
  ${tw`md:(w-[15.625rem] h-[15.625rem])`};
  ${tw`lg:(w-[17.25rem] h-[17.25rem])`};
  ${tw`xl:(w-[21.875rem] h-[21.875rem])`};
`;

const Anathem = styled(a.div)`
  ${tw`flex rounded-full overflow-hidden`};
  ${tw`border-[1.5px] border-white`};
  ${tw`-mt-3 mx-auto`};
  ${tw`md:(mt-28 ml-28) lg:(mt-32) xl:(ml-52) 2xl:(mt-28 ml-64)`};
  ${tw`relative z-20`};
  ${tw`w-[6.5rem] h-[6.5rem]`};
  ${tw`md:(w-[10.9375rem] h-[10.9375rem])`};
  ${tw`lg:(w-[11.75rem] h-[11.75rem])`};
  ${tw`xl:(w-[16.75rem] h-[16.75rem])`};
`;

const Macroblank = styled(a.div)`
  ${tw`flex rounded-full overflow-hidden`};
  ${tw`border-[1.5px] border-white`};
  ${tw`absolute z-10 left-0 bottom-0`};
  ${tw`md:(top-0)`};
  ${tw`w-[8rem] h-[8rem]`};
  ${tw`md:(w-[12.5rem] h-[12.5rem])`};
  ${tw`lg:(w-[14.5rem] h-[14.5rem])`};
  ${tw`xl:(w-[19.3125rem] h-[19.3125rem])`};
`;

const Images = styled.div`
  ${tw`flex relative h-[9.375rem]`};
  ${tw`md:(flex-col h-[29.625rem])`};
  ${tw`lg:(h-[33rem]) xl:(h-[42.1875rem])`};
`;

const Container = styled.div`
  container-type: inline-size;
  inline-size: 100%;
  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`md:(grid-cols-[auto, 17.5rem] gap-y-0 gap-x-10)`};
  ${tw`lg:(gap-x-24)`};
  ${tw`xl:(grid-cols-[auto, 30rem])`};
  ${tw`2xl:(grid-cols-[auto, 35rem]) 2xl:(gap-x-28)`};

  p {
    ${tw`font-sans text-white`};
    ${tw`md:(text-xl) lg:(text-2xl) xl:(text-3xl) 2xl:(text-4xl)`};
  }
`;

//! ----------> COMPONENTS <----------
const Visuals = () => {
  const { width } = useWindowSize();

  return (
    <Slide title="Visuals & Music">
      <Container>
        <div tw="flex flex-col space-y-6 md:(justify-center)" css={[`container-type: inline-size; inline-size: 100%;`]}>
          <p>
            Yum Yum Bloodgun's visual influence pulls heavily from Barberbeats and Post-vaporwave album covers, merging a glitched and heavily colorburned aesthetic with feudal Japanese, hellenistic, biblical, and alchemical motifs.
          </p>
          <p>
            Fast-paced, bloody combat is contrasted by jazzy, downtempo vaporwave tracks, creating a moody atmosphere reminiscent of Samurai Champloo and other Seinen anime.
          </p>
        </div>

        <Images>
          <Macroblank>
            <Image
              src="/images/music/macroblank.png"
              width={1200}
              height={1200}
              alt=""
              style={{ objectFit: `cover`, objectPosition: `center` }}
            />
          </Macroblank>

          <Anathem>
            <Image
              src="/images/music/oblique.png"
              width={1200}
              height={1200}
              alt=""
              style={{ objectFit: `cover`, objectPosition: `center` }}
            />
          </Anathem>

          <Haircuts>
            <Image
              src="/images/music/hfm.png"
              width={1200}
              height={1200}
              alt=""
              style={{ objectFit: `cover`, objectPosition: `center` }}
            />
          </Haircuts>
        </Images>

      </Container>
    </Slide>
  );
};

export default Visuals;
