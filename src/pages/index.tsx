import type { NextPage } from "next";
import "twin.macro";

import Slide from "@/styles/shared";
import Intro from "@/slides/001-intro";
import History from "@/slides/006-history";
import Roadmap from "@/slides/007-roadmap";

const IndexPage: NextPage = () => {
  return (
    <>
      <Slide
        title="High Level Roadmap"
      >
        <Roadmap />
      </Slide>
    </>
  );
};

export default IndexPage;
