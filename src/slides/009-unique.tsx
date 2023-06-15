import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  inline-size: 100%;
  min-block-size: 100dvh
  ${tw`flex flex-col space-y-8 md:(space-y-16)`};
  ${tw`font-sans text-white`};
`;

const Section = styled.div`
  ${tw`grid grid-cols-1`};
  ${tw`gap-y-5 md:(gap-y-0 gap-x-10)`};

  ul {
    container-type: inline-size;
    margin-inline-start: 5.2%;
    writing-mode: horizontal-tb;
    ${tw`flex flex-col space-y-3`};
    ${tw`list-disc list-outside`};
    ${tw`md:(space-y-5) xl:(space-y-8)`};
  }

  li {
    ${tw`leading-[125%] md:(leading-[118%] xl:(leading-[118%]))`};

    --font-size-base: 0.5rem;
    --font-size-fluid: 3.75cqi;

    --font-size: 0.5rem;
  }
`;

const Img = tw.div`flex`;

//! ----------> COMPONENTS <----------
const Advantages = () => {
  return (
    <Slide title="Unique Advantages">
      <Container>
        <Section tw="md:(grid-cols-[58%, auto]) lg:(grid-cols-[56%, auto] gap-x-16)">
          <ul>
            <li>
              Quick production - ~6 months remaining
            </li>
            <li>
              Built using GGPO and EOS, enabling seamless cross-platform rollback netcode
            </li>
            <li>
              No recurring server costs
            </li>
          </ul>
          <Img tw="mx-auto w-[10.125rem] lg:(w-[18rem]) xl:(w-[20rem]) 2xl:(w-[25.4375rem])">
            <Image
              src="/images/bullets.png"
              alt=""
              width={814}
              height={500}
              style={{ objectFit: `contain`, margin: `auto` }}
              loading="eager"
            />
          </Img>
        </Section>

        <Section tw="md:(grid-cols-[43%, auto]) lg:(gap-x-16)">

          <Img>
            <Image
              src="/images/sword.png"
              alt=""
              width={1591}
              height={160}
              style={{ objectFit: `contain`, margin: `auto` }}
              loading="eager"
            />
          </Img>

          <ul>
            <li>
              Bold aesthetic
            </li>
            <li>
              Refreshing, differentiated setting
            </li>
            <li>
              Elegantly designed and accessible yet competitive
            </li>
          </ul>
        </Section>
      </Container>
    </Slide>
  )
};

export default Advantages;
