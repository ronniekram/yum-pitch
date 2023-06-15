import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-[65%, auto] gap-x-[5%] gap-y-0)`};
  ${tw`lg:(grid-cols-[65%, auto] gap-x-[8%])`};
  ${tw`xl:(gap-x-[6%])`};
`;

const Copy = styled.div`
  ${tw`flex flex-col space-y-5`};
  ${tw`md:(space-y-6) xl:(space-y-10)`};
  ${tw`font-sans text-white`};
  ${tw`md:(text-lg) lg:(text-2xl) xl:(text-3xl) 2xl:(text-4xl)`};

  span {
    ${tw`font-xbold`};
  }
`;

//! ----------> COMPONENTS <----------
const Trends = () => {
  return (
    <Slide title="Trends & Projections">
      <Container>
        <Copy>
          <p>
            Fighting games have shown a continual uptick in audience over recent years, with both Guilty Gear Strive and the recent Street Fighter VI selling over one-million copies each. This trend has also shown increased success within the indie sphere, with the recently launched niche fighter <span>Your Only Move is Hustle</span> selling over 150,000 copies, and the Modus Games published <span>Them's Fightin Herds</span> seeing continued success with its battle-pass and seasonal content releases. Larger companies like Riot Games' upcoming <span>Project L</span> also show long-term investment on a massive scale.
          </p>
          <p>
            Roguelike Deckbuilders also continue to be one of Steam's most consistently high selling genres- we believe we can combine the two to create a unique and compelling experience that merges the best of both genres.
          </p>
        </Copy>

        <div tw="w-full h-full overflow-hidden">
          <video poster="/video/angel.png" autoPlay playsInline muted loop tw="h-full object-cover object-center">
            <source src="/video/angel.mp4" />
          </video>
        </div>
      </Container>
    </Slide>
  );
};

export default Trends;
