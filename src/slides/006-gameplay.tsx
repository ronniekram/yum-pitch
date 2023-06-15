import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> TYPES <----------
type Props = {
  title: string;
  body: JSX.Element;
  media: JSX.Element;
};

//! ----------> STYLES <----------
const Container = styled.div`
  container-type: inline-size;
  inline-size: 100%;
  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`2xl:(grid-cols-[51%, auto] gap-x-[6%])`};
  ${tw`font-sans text-white`};

  p {
    ${tw`text-base md:(text-lg) lg:(text-2xl) xl:(text-3xl) 2xl:(text-4xl)`};
  }
`;

//! ----------> COMPONENTS <----------
const GameplaySlide = ({ title, body, media }: Props) => {
  return (
    <Slide title={title}>
      <Container>
        <div tw="2xl:(flex items-center)">
          <p>{body}</p>
        </div>

        {media}
      </Container>
    </Slide>
  );
};

export default GameplaySlide;
