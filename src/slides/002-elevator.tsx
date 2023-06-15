import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-2 gap-x-[8%] gap-y-0)`};
  ${tw`xl:(gap-x-[6%])`};
  ${tw`font-sans text-white`};
  ${tw`text-xl md:(text-2xl) lg:(text-3xl) xl:(text-4xl)`};
`;

//! ----------> COMPONENTS <----------
const Elevator = () => {
  return (
    <Slide title="Elevator Pitch">
      <Container>
        <p>
          <span tw="font-xbold">YUM YUM BLOODGUN</span> gives players a fast-paced, pick-up and play competitive experience that merges fighting games with the strategy and unpredictability of roguelike deck-builders.
        </p>
        <p>
          <span tw="font-xbold">YYBG</span> emphasizes accessibility and aesthetics while maintaining tactical depth, establishing a singular identity via downtempo hip-hop beats, samurai duels, and esotericism.
        </p>
      </Container>
    </Slide>
  )
};

export default Elevator;
