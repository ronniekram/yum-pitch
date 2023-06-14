import type { NextPage } from "next";
import "twin.macro";

import Intro from "@/slides/001-intro";
import History from "@/slides/006-history";
import Roadmap from "@/slides/007-roadmap";

const IndexPage: NextPage = () => {
  return (
    <>
      <Roadmap />
    </>
  );
};

export default IndexPage;
