import Image from "next/image";
import "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const Roadmap = () => {
  return (
    <Slide title="High Level Roadmap">
      <div tw="w-full flex">
        <Image
          src="/images/infographics.png"
          width={2154}
          height={900}
          alt=""
          loading="eager"
        />
      </div>
    </Slide>
  )
};

export default Roadmap;
