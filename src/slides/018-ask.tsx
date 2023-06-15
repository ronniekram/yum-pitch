import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-[56%, auto]) gap-y-0`};
  ${tw`2xl:(grid-cols-[40%, auto])`};
`;

const Lists = styled.div`
  ${tw`flex flex-col space-y-5 lg:(space-y-8) xl:(space-y-10)`};

  h2 {
    ${tw`font-display font-bold text-white`};
    ${tw`text-2xl md:(text-4xl) lg:(text-5xl) xl:(text-6xl)`};
  }

  ul {
    ${tw`list-disc list-outside`};
    ${tw`flex flex-col space-y-1 lg:(space-y-2)`};
    ${tw`ml-7 mb-2 md:(ml-9 mb-3) lg:(ml-11 mb-3.5) xl:(ml-12 mb-4)`};
    ${tw`font-sans text-white`};
  }

  li {
    ${tw`text-base md:(text-xl) lg:(text-2xl) xl:(text-3xl)`};
  }

  p {
    ${tw`font-sans font-bold text-gold text-lg`};
    ${tw`md:(text-2xl) lg:(text-3xl) xl:(text-4xl)`};
    ${tw`ml-7 md:(ml-9) lg:(ml-11) xl:(ml-12)`};
  }

  span {
    ${tw`font-bold`};
  }
`;

const Logo = styled.div`
  ${tw`mx-auto`};
  ${tw`w-[12.5rem] h-[12.875rem]`};
  ${tw`md:(w-[15.625rem] h-[16.0625rem])`};
  ${tw`lg:(w-[18.75rem] h-[19.25rem])`};
  ${tw`xl:(w-[26.5625rem] h-[27.3125rem])`};
  ${tw`2xl:(w-[35.1875rem] h-[36.125rem])`};
`;

const Bullet = styled.div`
  ${tw`flex items-center`};
  ${tw`space-x-3 md:(space-x-4) xl:(space-x-5)`};
  ${tw`h-[2.1875rem] md:(h-14) lg:(h-16) xl:(h-[4.8125rem])`};
  ${tw`mb-1 md:(mb-2) lg:(mb-3) xl:(mb-4)`};
`;

const BulletPoint = ({ label }: { label: string }) => {
  return (
    <Bullet>
      <div tw="flex w-[0.8125rem] h-[2.1875rem] md:(w-[1.1875rem] h-14) lg:(w-6 h-16)">
        <Image
          src="/images/bullet.png"
          alt=""
          width={28}
          height={75}
          style={{ objectFit: `contain` }}
        />
      </div>
      <h2>{label}</h2>
    </Bullet>
  );
};

const Asking = () => {
  return (
    <Slide title="What We're Asking For">
      <Container>
        <Lists>
          {/* BUDGET  */}
          <div>
            <BulletPoint label="Production Budget" />
            <ul>
              <li>
                <span>Sound  Design & Implementation:</span> $3,500
              </li>
              <li>
                <span>Soundtrack Mastering:</span> $1,000
              </li>
              <li>
                <span>Trailer:</span> $5,000
              </li>
              <li>
                <span>Commissioned Retail/Collateral Art:</span> $2,000
              </li>
              <li>
                <span>Contractors:</span> $9,234
              </li>
              <li>
                <span>Burn for Remaining Dev:</span> $46,620
                <p tw="font-normal! text-white! ml-0! text-sm! md:(text-base!) xl:(text-2xl!)">($7,000/mo @ 6.66 months)</p>
              </li>
            </ul>
            <p>
              <span>Total Ask:</span> $67,354
            </p>
          </div>
          {/* MARKETING */}
          <div>
            <BulletPoint label="Marketing" />
          </div>
          {/* QA */}
          <div>
            <BulletPoint label="QA" />
          </div>
        </Lists>

        <Logo>
          <Image
            src="/images/logo.png"
            alt=""
            width={563}
            height={578}
          />
        </Logo>
      </Container>
    </Slide>
  );
};

export default Asking;
