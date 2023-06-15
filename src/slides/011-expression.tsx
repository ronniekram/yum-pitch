import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-[60%, auto] gap-x-[5%] gap-y-0)`};
  ${tw`lg:(grid-cols-[60%, auto] gap-x-[8%])`};
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
const Expressions = () => {
  return (
    <Slide title="Player Expressions">
      <Container>
        <Copy>
          <p>
            Over the course of single-player mode, as well as online and local competitive play, players will unlock a variety of cosmetic items for their player character and nameplate to customize their play experience and identity.
          </p>
        </Copy>
      </Container>
    </Slide>
  );
};

export default Expressions;
