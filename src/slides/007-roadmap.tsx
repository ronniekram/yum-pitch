import Image from "next/image";
import "twin.macro";

//! ----------> COMPONENTS <----------
const Roadmap = () => {
  return (
    <div tw="w-full md:(pt-8) lg:(pt-10)">
      <Image src="/images/infographics.png" alt="" width={2154} height={900} loading="eager" />
    </div>
  );
};

export default Roadmap;
