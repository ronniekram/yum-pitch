import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type SlideProps = {
  title: string;
  subTitle?: string;
  children: JSX.Element;
};

//! ----------> STYLES <----------
export const Wrapper = styled.section`
  max-inline-size: 86rem;
  inline-size: 100%;
  margin-inline: auto;
  container-type: inline-size;
  ${tw`h-[fit-content]`};
  ${tw`flex flex-col space-y-12 md:(space-y-16)`};
  ${tw`px-[5.3%] pt-10 pb-10 md:(px-[5.2%] pb-24) xl:(pt-16) 2xl:(px-0)`};

  h1 {
    ${tw`font-display font-bold text-red-100`};
  }
`;

const Slide = ({ title, subTitle, children }: SlideProps) => {
  return (
    <Wrapper>
      <div css={[`inline-size: 100%;`]}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      {children}
    </Wrapper>
  );
};

export default Slide;
