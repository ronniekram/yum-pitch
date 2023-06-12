import tw, { styled } from "twin.macro";

import Glitch from "@/components/glitch";
import { YumYum, Bloodgun, SamuraiBeats } from "@/assets/001";

//! ----------> STYLES <----------
const Container = styled.section`
  ${tw`w-full bg-black pt-10 pb-24 md:(pb-32) xl:(pt-28)`};
  ${tw`flex flex-col space-y-8 md:(space-y-12) xl:(space-y-20)`};
  ${tw`min-h-screen`};
`;

const Wrapper = styled.div`
  ${tw`w-full max-w-[86rem] mx-auto px-[5.3%] md:(px-[5.2%]) 2xl:(px-0)`};
`;

//! ----------> COMPONENTS <----------
const Header = () => (
  <header tw="w-full bg-black">
    <Wrapper tw="flex flex-col items-center justify-center md:(flex-row space-x-2.5)">
      <div tw="flex w-[81%] md:(mb-4 w-[55%]) 2xl:(w-[52%] mb-6)">
        <YumYum />
      </div>
      <div tw="w-[80%] md:(w-[44%]) 2xl:(w-[41%])">
        <Bloodgun />
      </div>
    </Wrapper>
  </header>
);

const Intro = () => {
  return (
    <Container>
      <Header />
      <Glitch />
      <Wrapper>
        <SamuraiBeats />
      </Wrapper>
    </Container>
  );
};

export default Intro;
