import type { NextPage } from "next";
import "twin.macro";

import Slide from "@/styles/shared";
import Intro from "@/slides/001-intro";
import History from "@/slides/006-history";

const IndexPage: NextPage = () => {
  return (
    <>
      <Slide title="Production History & Status">
        <History />
      </Slide>
    </>
  );
};

export default IndexPage;
