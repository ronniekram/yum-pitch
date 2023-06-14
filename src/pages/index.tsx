import type { NextPage } from "next";
import "twin.macro";

import Intro from "@/slides/001-intro";
import History from "@/slides/006-history";
import Roadmap from "@/slides/007-roadmap";
import Advantages from "@/slides/008-unique";
import Influences from "@/slides/010-influence";
import Compare from "@/slides/012-compare";

const IndexPage: NextPage = () => {
  return (
    <>
      <Compare />
    </>
  );
};

export default IndexPage;
