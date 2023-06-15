import type { NextPage } from "next";
import { useSpringCarousel } from "react-spring-carousel";
import tw, { styled } from "twin.macro";

import { slides } from "@/slides";
import Nav from "@/components/nav";

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-full h-full`};
`;
//! ----------> COMPONENTS <----------

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
    springConfig: { tension: 210, friction: 20 },
  });



  return (
    <Wrapper>
      <div tw="h-[100dvh] flex items-end px-4 pb-12 fixed left-0 z-10">
        <Nav onClick={slideToPrevItem} prev />
      </div>

      <div tw="h-[100dvh] flex items-end px-4 pb-12 fixed right-0 z-10">
        <Nav onClick={slideToNextItem} />
      </div>

      <div tw="w-screen h-[fit-content] relative z-0">
        {carouselFragment}
      </div>
    </Wrapper>
  );
};

export default IndexPage;
