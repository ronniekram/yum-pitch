import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-[65%, auto] gap-x-[5%] gap-y-0)`};
  ${tw`lg:(grid-cols-[65%, auto] gap-x-[8%])`};
  ${tw`xl:(gap-x-[6%])`};
`;

const Copy = styled.div`
  ${tw`flex flex-col space-y-5`};
  ${tw`md:(space-y-6) xl:(space-y-10)`};
  ${tw`font-sans text-white`};
  ${tw`md:(text-lg) lg:(text-2xl) xl:(text-3xl) 2xl:(text-4xl)`};

  span {
    ${tw`font-xbold`};
  }
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

      </Container>
    </Slide>
  );
};

export default SinglePlayer;
