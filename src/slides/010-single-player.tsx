import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5 md:(gap-y-10)`};
  ${tw`lg:(grid-cols-[50%, auto] gap-x-[8%] gap-y-0)`};
  ${tw`xl:(grid-cols-[50%, auto] gap-x-[6%])`};
  ${tw`2xl:(grid-cols-[45%, auto])`};
`;

const Copy = styled.div`
  ${tw`flex flex-col space-y-5`};
  ${tw`md:(space-y-6) xl:(space-y-10)`};
  ${tw`font-sans text-white`};
  ${tw`text-lg md:(text-xl) lg:(text-2xl) xl:(text-3xl) 2xl:(text-4xl)`};

  span {
    ${tw`font-xbold`};
  }
`;

const Img = styled.div`
  ${tw`flex`};
  ${tw`w-[20.9375rem] h-[11.6875rem]`};
  ${tw`md:(w-[35.9375rem] h-[20.0625rem])`};
  ${tw`lg:(w-[31.25rem] h-[17.4375rem])`};
  ${tw`xl:(w-[43.75rem] h-[24.375rem])`};
`;

//! ----------> COMPONENTS <----------
const SinglePlayer = () => {
  return (
    <Slide title="Single-player Mode">
      <Container>
        <Copy>
          <p>
            YYBG aims to also provide a distinct single-player mode, in which players build up a unique moveset in each run via unlocking and selecting from a limited pool of perks, going up against opponents who each have their own unique strategy and set of perks.
          </p>
          <p>
            Through multiple runs players will unlock new perks for future runs, as well as cosmetics that can be carried into online and local play.
          </p>
        </Copy>
        <div tw="flex justify-end">
          <Img>
            <Image
              src="/images/character-3.gif"
              width={900}
              height={451}
              alt=""
              loading="eager"
            />
          </Img>
        </div>
      </Container>
    </Slide>
  );
};

export default SinglePlayer;
