import tw, { styled } from "twin.macro";

//! ----------> STYLES <----------
export const Wrapper = styled.section`
  ${tw`w-full max-h-fit flex flex-col items-center mx-auto`};
  ${tw`lg:(w-[80%]) xl:(w-[75%]) max-w-[61.875rem]`};
  ${tw`space-y-8`};
  ${tw`px-[5.3%] pt-10 pb-16 md:(px-[5.2%]) xl:(pt-14) 2xl:(px-0)`};
`;

const Video = styled.div`
  ${tw`mx-auto w-full h-[fit-content]`};
  ${tw`flex`};
`;

const P = tw.p`mx-auto font-sans font-bold text-white text-xl md:(text-2xl)  lg:(text-3xl) xl:(text-4xl) h-[fit-content]`;

//! ----------> COMPONENTS <----------
const GameplayIntro = () => {
  return (
    <Wrapper>
      <Video>
        <video poster="/video/gameplay.png" playsInline autoPlay muted loop>
          <source src="/video/gameplay.mp4" />
        </video>
      </Video>
      <P>
        The elements all come together to create a distilled fighting game experience dripping with style and originality, without the barrier to entry common in the genre.
      </P>
    </Wrapper>
  );
};

export default GameplayIntro;
