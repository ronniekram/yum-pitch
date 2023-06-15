import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";
import { Itch, PS, Steam, Xbox } from "@/assets/platforms";

//! ----------> TYPES <----------
const platforms = {
  itch: {
    name: `Itch`,
    icon: <Itch />,
  },
  ps: {
    name: `PS 4&5`,
    icon: <PS />,
  },
  steam: {
    name: `Steam`,
    icon: <Steam />,
  },
  xbox: {
    name: `XBox`,
    icon: <Xbox />,
  },
};

type PlatformIcon = keyof typeof platforms;

type PlatformProps = {
  title: string;
  platformsList: PlatformIcon[];
};

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`text-white`};
  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`md:(gap-y-12) xl:(grid-cols-2 gap-x-20 gap-y-0)`};

  h3 {
    ${tw`font-display font-bold`};
    ${tw`text-2xl lg:(text-4xl) xl:(text-6xl)`};
  }
`;

const Section = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-2 gap-y-0 gap-x-8)`};
  ${tw`xl:(grid-cols-1 gap-x-0 gap-y-10)`};
`;

const PlatformContainer = styled.div`
  ${tw`border-2 border-white`};
  ${tw`px-4 py-7 md:(px-5 py-8) xl:(px-8 py-12)`};
  ${tw`flex flex-col space-y-8 xl:(space-y-16)`};

  p {
    ${tw`font-sans font-bold`};
    ${tw`text-xl xl:(text-4xl)`};
  }
`;

const PlatformWrap = styled.div`
  ${tw`flex flex-col space-y-2 items-center`};
  ${tw`xl:(space-y-3)`};
`;

const Img = styled.div`
  ${tw`mx-auto`};
  ${tw`w-[10.9375rem] h-[11.25rem]`};
  ${tw`md:(w-[14.0625rem] h-[14.4375rem])`};
  ${tw`lg:(w-[18.75rem] h-[19.25rem])`};
  ${tw`xl:(w-[28.125rem] h-[28.875rem])`};
`;

//! ----------> COMPONENTS <----------
const PlatformBox = ({ title, platformsList }: PlatformProps) => {
  return (
    <PlatformContainer>
      <h3>{title}</h3>
      <div tw="grid grid-cols-2">
        {platformsList.map((p) => (
          <PlatformWrap key={platforms[p].name}>
            <div tw="w-[7.8125rem] h-[7.8125rem] xl:(w-[12.5rem] h-[12.5rem])">
              {platforms[p].icon}
            </div>
            <p>{platforms[p].name}</p>
          </PlatformWrap>
        ))}
      </div>
    </PlatformContainer>
  );
};

const Platforms = () => {
  return (
    <Slide title="Platforms & Release">
      <Container>
        <Section>
          <div tw="h-full flex flex-col space-y-4 justify-center xl:( space-y-10)">
            <div>
              <h3 tw="xl:(mb-2)">Intended Release Date</h3>
              <p tw="font-sans font-xbold text-white text-xl lg:(text-2xl) xl:(text-[40px] leading-[52px])">
                Late 2023/Early 2024
              </p>
            </div>
            <div>
              <h3 tw="xl:(mb-2)">Intended Price</h3>
              <p tw="font-sans font-xbold text-white text-xl lg:(text-2xl) xl:(text-[40px] leading-[52px])">
                $14.99
              </p>
            </div>
          </div>
          <Img>
            <Image
              src="/images/logo.png"
              width={563}
              height={578}
              alt=""
            />
          </Img>
        </Section>

        <Section>
          <PlatformBox title="Target Platforms" platformsList={[`steam`, `itch`]} />
          <PlatformBox title="Extended Target Platforms" platformsList={[`ps`, `xbox`]} />
        </Section>
      </Container>
    </Slide>
  );
};

export default Platforms;
