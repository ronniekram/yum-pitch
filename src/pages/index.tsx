import type { NextPage } from "next";
import { useSpringCarousel } from "react-spring-carousel";
import "twin.macro";

import { slides } from "@/slides";
import Nav from "@/components/nav";

const IndexPage: NextPage = () => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    withLoop: true,
    items: slides.map((slide, i) => ({
      id: `slide-${i}`,
      renderItem: (
        <>
          {slide}
        </>
      ),
    })),
    springConfig: { tension: 120, friction: 14 },
  });



  return (
    <div tw="w-screen h-full">
      <div tw="h-screen flex items-end px-4 pb-12 fixed left-0 z-10">
        <Nav onClick={slideToPrevItem} prev />
      </div>

      <div tw="h-screen flex items-end px-4 pb-12 fixed right-0 z-10">
        <Nav onClick={slideToNextItem} />
      </div>

      <div tw="w-screen min-h-[100dvh] relative z-0">
        {carouselFragment}
      </div>
    </div>
  );
};

export default IndexPage;
