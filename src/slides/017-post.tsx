import Image from "next/image";
import tw, { styled } from "twin.macro";

import Slide from "@/styles/shared";

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-[65%, auto] gap-x-[5%] gap-y-0)`};
  ${tw`lg:(grid-cols-[65%, auto] gap-x-[8%])`};
  ${tw`xl:(gap-x-[6%])`};
`;

const Bullet = styled.div`
  ${tw`flex`};
  ${tw`space-x-3 md:(space-x-4) xl:(space-x-5)`};
  ${tw`mb-1 md:(mb-2) lg:(mb-3) xl:(mb-4)`};

  h2 {
    ${tw`font-display font-bold text-white`};
    ${tw`text-2xl md:(text-4xl) lg:(text-5xl) xl:(text-6xl)`};
    ${tw`md:(mt-1.5) lg:(mt-1)`};
  }
`;

//! ----------> COMPONENTS <----------
const BulletPoint = ({ label }: { label: string }) => {
  return (
    <Bullet>
      <div tw="flex [flex-shrink: 0] w-[0.8125rem]! h-[2.1875rem]! md:(w-[1.1875rem]! h-14!) lg:(w-6! h-16!)">
        <Image
          src="/images/bullet.png"
          alt=""
          width={28}
          height={75}
        />
      </div>
      <h2>{label}</h2>
    </Bullet>
  );
};

const Post = () => {
  return (
    <Slide title="Post-release Support">
      <Container>
        <div tw="flex flex-col space-y-3 md:(space-y-5) xl:(space-y-10)">
          <BulletPoint label="Community Tournaments" />
          <BulletPoint label="Cosmetic DLC Packs" />
          <BulletPoint label="Additional Stages" />
          <BulletPoint label="Future games developed within the same IP" />
        </div>
      </Container>
    </Slide>
  );
};

export default Post;
