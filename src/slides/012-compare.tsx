/* eslint-disable unicorn/numeric-separators-style */
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";

import Slide from "@/styles/shared";
import Odometer from "@/components/odometer";

//! ----------> TYPES <----------
type GameProps = {
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
    right?: boolean;
  };
  name: string;
  platforms: string[];
  sales: number;
  price: number;
};

//! ----------> STYLES <----------
const Img = styled.div`
  ${tw`flex`};
  ${tw`w-[20.9375rem] h-[9.8125rem]`};
  ${tw`md:(w-[12.5rem] h-[12.4375rem])`};
  ${tw`lg:(w-[24.9375rem] h-[12.4375rem])`};
  ${tw`xl:(w-[33.3125rem] h-[15.5625rem])`};
  ${tw`border border-white`};
`;

const Divider = styled.div`
  ${tw`w-full h-[1.125rem]`};
  background-image: url("/images/svg/divider.svg");
  background-repeat: repeat-x;
  background-position: center;
`;

const Container = styled.div`
  container-type: inline-size;
  inline-size: 100%;

  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`md:(gap-y-14) xl:(gap-y-16)`};
`;

const GameWrap = styled.div`
  container-type: inline-size;
  inline-size: 100%;

  ${tw`grid grid-cols-1 gap-y-3`};
  ${tw`md:(gap-y-0 gap-x-8) xl:(gap-x-[4.5625rem])`};
  ${tw`md:(grid-cols-[12.5rem, auto]) lg:(grid-cols-[24.9375rem, auto]) xl:(grid-cols-[33.3125rem, auto])`};
`;

const Details = styled.div`
  container-type: inline-size;
  inline-size: 100%;

  ${tw`flex flex-col space-y-2`};
  ${tw`md:(space-y-3) xl:(space-y-6)`};

  h2 {
    ${tw`font-display font-bold text-white`};
  }
`;

const List = styled.div`
  container-type: inline-size;
  inline-size: 100%;

  ${tw`flex flex-col space-y-1`};
  ${tw`md:(space-y-1.5) xl:(space-y-3)`};
  p {
    ${tw`font-sans text-white`};
  }

  span {
    ${tw`font-xbold`};
  }
`;


//! ----------> COMPONENTS <----------
const Game = ({ img, name, platforms, sales, price }: GameProps) => {
  const USD = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
  });

  return (
    <GameWrap css={[img.right && tw`md:(grid-cols-[auto, 12.5rem]) lg:(grid-cols-[auto, 24.9375rem]) xl:(grid-cols-[auto, 33.3125rem])`]}>
      <Img>
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt}
          style={{ objectFit: `cover`, objectPosition: `center` }}
        />
      </Img>

      <Details css={[img.right && tw`md:(order-[-1])`]}>
        <h2>{name}</h2>
        <List className="fluid-type">
          <p>
            <span>Platforms:</span> {" "}{platforms.join(`, `)}
          </p>
          <p>
            <span>Sales on Steam:</span> {" "}<Odometer value={sales} />
          </p>
          <p>
            <span>Price:</span> {" "}{USD.format(price)}
          </p>
        </List>
      </Details>
    </GameWrap>
  );
};

const Compare = () => {
  const { width } = useWindowSize();

  const lethal = (width >= 768 && width < 1024) ? `/images/similar/lethal-sm.png` : `/images/similar/lethal.png`;
  const hustle = (width >= 768 && width < 1024) ? `/images/similar/hustle-sm.png` : `/images/similar/hustle.png`;
  const nidhogg = (width >= 768 && width < 1024) ? `/images/similar/nidhogg-sm.png` : `/images/similar/nidhogg.png`;

  const imgWidth = (width >= 768 && width < 1024) ? 200 : 688;
  const imgHeight = (width >= 768 && width < 1024) ? 199 : 323;

  return (
    <Slide title="Comparable Games">
      <Container>
        <Game
          img={{ src: lethal, width: imgWidth, height: imgHeight, alt: `` }}
          name="Lethal League Blaze"
          platforms={[`PC`, `Mac`, `Nintendo Switch`, `Xbox`, `PS4`]}
          sales={122580}
          price={19.99}
        />
        <Divider />

        <Game
          img={{ src: hustle, width: imgWidth, height: imgHeight, alt: ``, right: true }}
          name="Your Only Move is Hustle"
          platforms={[`PC`]}
          sales={185480}
          price={4.99}
        />
        <Divider />

        <Game
          img={{ src: nidhogg, width: imgWidth, height: imgHeight, alt: `` }}
          name="Nidhogg"
          platforms={[`PC`]}
          sales={159030}
          price={9.99}
        />
      </Container>
    </Slide>
  );
};

export default Compare;