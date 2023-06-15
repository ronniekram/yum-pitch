import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";


//! ----------> STYLES <----------
const H2 = tw.h2`font-display font-bold text-3xl md:(text-5xl) xl:(text-6xl)`;
const P = tw.p`font-sans text-base md:(text-lg) xl:(text-3xl)`;
const A = tw.a`font-sans font-bold text-gold transition duration-300 ease-in-out hover:(underline) text-base md:(text-lg) lg:(text-xl) xl:(text-2xl)`;

const Bio = tw.div`flex flex-col space-y-2 md:(space-y-3) xl:(space-y-4)`;
const Img = tw.div`mx-auto w-[12.5rem] h-[15.75rem] md:(w-[17.1875rem] h-[21.625rem] row-span-2) lg:(w-[25rem] h-[31.4375rem]) xl:(w-[35.9375rem] h-[45.1875rem])`;

const Container = styled.div`
  ${tw`text-white`};
  ${tw`grid grid-cols-1 gap-y-6`};
  ${tw`md:(grid-cols-2 grid-rows-2 gap-x-11 gap-y-12)`};
  ${tw`lg:(gap-x-20)`};
  ${tw`xl:(gap-y-16)`};
  ${tw`2xl:(gap-x-24 gap-y-20)`};
`;

//! ----------> COMPONENTS <----------
const AboutUs = () => {
  return (
    <Slide title="About Us">
      <Container>
        <Bio>
          <H2>Jer Boniface</H2>
          <P>
            Jer is an engineer and designer who is responsible for implementing the entirety of the game's functionality from the player controller to the netcode. He has worked for multiple tech companies including Netflix, Squarespace, and Expensify, managing, supporting, and shipping software to millions of customers.
          </P>
        </Bio>

        <Img>
          <Image
            src="/images/gdlogo.png"
            width={680}
            height={854}
            alt="Goblin Delight's Logo - A mix of a shih tzu and goblin but it's also an onion."
            loading="eager"
          />
        </Img>

        <div>
          <Bio>
            <H2>Seb Galvez</H2>
            <P>
              Seb has worked as an artist and designer on multiple projects over the past three years since entering the industry, with both small studios and individual clients. Doesn't listen to anything without a bass line.
            </P>
          </Bio>

          <div tw="flex space-x-8 mt-4 xl:(mt-6)">
            <A href="mailto:press@goblindelight.com">press@goblindelight.com</A>
            <A href="https://yumyum.cool/" target="_blank" rel="noreferrer">yumyum.cool</A>
          </div>
        </div>

      </Container>
    </Slide>
  );
};

export default AboutUs;
