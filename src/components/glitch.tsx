import tw, { styled } from "twin.macro";

//! ----------> STYLES <----------
export const Container = styled.div`
  ${tw`w-[fit-content] max-w-[106rem] grid grid-cols-4 gap-x-0`};
  ${tw`h-[8.125rem] sm:(h-[13.75rem]) md:(h-[16.6875rem]) lg:(h-[22.25rem]) xl:(h-[27.8125rem]) 2xl:(h-[33.375rem])`};
  ${tw`overflow-hidden mx-auto`};
`;

//! ----------> COMPONENTS <----------
const Video = ({ src, poster }: { src: string; poster: string }) => {
  return (
    <video poster={poster} muted autoPlay loop playsInline>
      <source src={src} />
    </video>
  );
};

const Glitch = () => {
  return (
    <Container>
      <Video src="/video/anatomy.mp4" poster="/video/anatomy.png" />
      <Video src="/video/angel.mp4" poster="/video/angel.png" />
      <Video src="/video/caeser.mp4" poster="/video/caeser.png" />
      <Video src="/video/gun.mp4" poster="/video/gun.png" />
    </Container>
  );
};

export default Glitch;
