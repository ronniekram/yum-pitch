import { useState, useEffect } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useSpring, animated as a, config } from "react-spring";
import { useWindowSize } from "react-use";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Large = styled(a.div)`
  ${tw`h-[15.625rem] md:(h-[25rem] lg:(h-[28rem]) xl:(h-[31.25rem]))`};
  ${tw`rounded-[999px] overflow-hidden`};
  ${tw`border-[3px] border-white`};
  ${tw`xl:(ml-[10%]) 2xl:(ml-[15%])`};
`;

const Small = styled(a.div)`
  ${tw`h-[9.375rem] md:(h-[14.0625rem] lg:(h-[16.25rem]) xl:(h-[18.75rem]))`};
  ${tw`rounded-[999px] overflow-hidden`};
  ${tw`border-2 border-white`};
  ${tw`ml-11 -mt-4 md:(ml-[40%] -mt-8) lg:(-mt-14) xl:(-mt-24 ml-[50%])`};
`;
//! ----------> COMPONENTS <----------
const Influences = () => {
  const { width } = useWindowSize();
  const [sm, setSm] = useState<string[]>([`9.375rem`, `19.4375rem`]);
  const [lg, setLg] = useState<string[]>([`15.625rem`, `20.9375rem`]);
  const [smHover, setSmHover] = useState<boolean>(false);
  const [lgHover, setLgHover] = useState<boolean>(false);

  const smSpring = useSpring({
    width: smHover ? sm[1] : sm[0],
    config: config.wobbly,
  });

  const lgSpring = useSpring({
    width: lgHover ? lg[1] : lg[0],
    config: config.wobbly,
  });

  useEffect(() => {
    if (width <= 375) {
      setSm([`9.375rem`, `18.4375rem`]);
      setLg([`15.625rem`, `19.9375rem`]);
      return;
    }
    if (width <= 768) {
      setSm([`14.0625rem`, `27.75rem`]);
      setLg([`25rem`, `38.4375rem`]);
      return;
    }

    if (width <= 1024) {
      setSm([`16.25rem`, `32.4375rem`]);
      setLg([`28rem`, `43rem`]);
      return;
    }

    if (width <= 1280) {
      setSm([`18.75rem`, `36.6875rem`]);
      setLg([`31.25rem`, `55rem`]);
      return;
    }

    setSm([`18.75rem`, `40.6875rem`]);
    setLg([`31.25rem`, `60.4375rem`]);
  }, [width]);

  return (
    <Slide title="Influences & Inspiration">
      <div tw="w-full h-full">
        <Large
          style={lgSpring}
          onMouseEnter={() => setLgHover(true)}
          onMouseLeave={() => setLgHover(false)}
        >
          <Image
            src="/images/influence/hyperlight.png"
            width={1920}
            height={1080}
            alt=""
            tw="h-full"
            style={{ objectFit: `cover`, objectPosition: `left` }}
            loading="eager"
          />
        </Large>
        <Small
          style={smSpring}
          onMouseEnter={() => setSmHover(true)}
          onMouseLeave={() => setSmHover(false)}
        >
          <Image
            src="/images/influence/guilty-gear.png"
            width={1920}
            height={1080}
            alt=""
            tw="h-full"
            style={{ objectFit: `cover`, objectPosition: `left` }}
            loading="eager"
          />
        </Small>
      </div>
    </Slide>
  );
};

export default Influences;
