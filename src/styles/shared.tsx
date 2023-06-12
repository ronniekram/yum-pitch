import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type SlideProps = {
  title: string;
  children: JSX.Element;
};

//! ----------> STYLES <----------
export const Wrapper = styled.section`
  ${tw`mx-auto w-screen min-h-screen max-w-[86rem]`};
  ${tw`flex flex-col space-y-12 md:(space-y-16) xl:(space-y-20)`};
  ${tw`px-[5.3%] pt-10 pb-24 md:(px-[5.2%] pb-32) xl:(pt-20) 2xl:(px-0)`};

  h1 {
    ${tw`font-display font-bold`};
    ${tw`text-red-100 text-[2.5rem] leading-[3.5rem]`};
    ${tw`md:(text-[4rem] leading-[auto])`};
    ${tw`xl:(text-8xl)`};
  }
`;

const Slide = ({ title, children }: SlideProps) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {children}
    </Wrapper>
  );
};

export default Slide;
