import Image from "next/image";
import tw, { styled } from "twin.macro";


//! ----------> STYLES <----------
export const Wrapper = styled.section`
  max-inline-size: 86rem;
  inline-size: 100%;
  min-block-size: 100dvh;
  margin-inline: auto;
  container-type: inline-size;
  ${tw`grid grid-cols-1 gap-y-12 md:(gap-y-16) 2xl:(gap-y-20)`};
  ${tw`px-[5.3%] pt-10 pb-24 md:(px-[5.2%] pb-32) xl:(pt-20) 2xl:(px-0)`};
`;

const Video = styled.div`
  ${tw`mx-auto w-full md:(w-[80%]) xl:(w-[75%])`};
`;

const P = tw.p`font-sans font-xbold text-white text-center text-lg md:(text-3xl) lg:(text-4xl) xl:(text-5xl)`;

//! ----------> COMPONENTS <----------
const GameplayIntro = () => {
  return (
    <Wrapper>
      <Video>

      </Video>
      <P>
        The elements all come together to create a distilled fighting game experience dripping with style and originality, without the barrier to entry common in the genre.
      </P>
    </Wrapper>
  );
};

export default GameplayIntro;
