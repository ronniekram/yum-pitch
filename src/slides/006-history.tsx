import Image from "next/image";
import tw, { styled } from "twin.macro";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`w-full h-[fit-content] place-items-center`};
  ${tw`grid grid-cols-1 gap-y-14`};
  ${tw`md:(grid-cols-[60%, 55%] gap-x-10 gap-y-0) lg:(grid-cols-[45%, 45%] gap-x-36)`};
  ${tw`xl:(grid-cols-[55%, 40%]) 2xl:(grid-cols-[55%, 45%])`};
  ${tw`font-sans text-white`};

  ul {
    ${tw`flex flex-col space-y-3`};
    ${tw`list-disc list-outside`};
    ${tw`text-lg`};
    ${tw`md:(space-y-5 text-xl) lg:(text-2xl)`};
    ${tw`xl:(space-y-8)`};
    ${tw`2xl:(text-[2.5rem] leading-[3.5rem])`};
    ${tw`ml-[5.3%] md:(ml-[5.2%])`};
  }
`;

const Img = styled.div`
  ${tw`transition-all duration-300 ease-in-out`};
  ${tw`relative`};
  ${tw`w-full h-full min-h-[2.5rem]`};
`;

//! ----------> COMPONENTS <----------
const History = () => {
  return (
    <Container>
      <ul>
        <li>
          Began production in April 2023
        </li>
        <li>
          Bootstrapped using a netcode stack we've been refining for the past ~year with a stable implementation of GGPO at its core
        </li>
        <li>
          Vertical slice achieved in June 2023
        </li>
        <li>
          Currently prepared to enter its Alpha stage as we focus on polishing core combat and introducing the perk system to the game
        </li>
        <li>
          Aiming for release by end of year
        </li>
      </ul>

      <Img>
        <Image
          src="/images/sword.png"
          alt="Red and black illustration of a sword"
          fill
          // width={1591}
          // height={160}
          style={{ objectFit: `contain`, height: `100%` }}
          tw="md:(-rotate-90)"
        />
      </Img>
    </Container>
  );
};

export default History;
