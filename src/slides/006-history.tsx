import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";

//! ----------> STYLES <----------
const Container = styled.div`
  inline-size: 100%;
  min-block-size: 100dvh
  ${tw`place-items-center`};
  ${tw`grid grid-cols-1 gap-y-14`};
  ${tw`md:(grid-cols-[75%, auto] gap-x-10 gap-y-0)`};
  ${tw`lg:(grid-cols-[70%, auto])`};
  ${tw`font-sans text-white`};

  ul {
    container-type: inline-size;
    margin-inline-start: 5.2%;
    writing-mode: horizontal-tb;
    ${tw`flex flex-col space-y-3`};
    ${tw`list-disc list-outside`};
    ${tw`md:(space-y-5 text-xl) lg:(text-2xl)`};
    ${tw`xl:(space-y-8)`};
  }

  li {
    ${tw`leading-[125%] md:(leading-[118%] xl:(leading-[118%]))`};
  }
`;

const Img = styled.div`
  ${tw`flex justify-end`};
  ${tw`md:(h-[31.25rem])`};
  ${tw`lg:(h-[37rem] pr-[20%])`};
  ${tw`xl:(h-[43.75rem])`};
`;

//! ----------> COMPONENTS <----------
const History = () => {
  const { width } = useWindowSize();
  const image = width < 376 ? `/images/sword.png` : `/images/sword-upright.png`;
  const imgWidth = width < 376 ? 1591 : 71;
  const imgHeight = width < 376 ? 160 : 700;

  return (
    <Container>
      <ul>
        <li>
          Began production in April 2023
        </li>
        <li>
          Bootstrapped using a netcode stack we've been refining for the past ~year with a stable implementation of GGPO at its core
        </li>
        <li>
          Vertical slice achieved in June 2023
        </li>
        <li>
          Currently prepared to enter its Alpha stage as we focus on polishing core combat and introducing the perk system to the game
        </li>
        <li>
          Aiming for release by end of year
        </li>
      </ul>

      <Img>
        <Image
          src={image}
          width={imgWidth}
          height={imgHeight}
          alt="Red and black illustration of a sword"
          style={{ objectFit: `contain` }}
        />
      </Img>
    </Container>
  );
};

export default History;
