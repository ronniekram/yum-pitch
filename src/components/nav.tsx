import tw, { styled } from "twin.macro";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//! ----------> TYPES <----------
type Props = JSX.IntrinsicElements[`button`] & {
  onClick: () => void;
  prev?: boolean;
};

//! ----------> STYLES <----------
const Circle = styled.button`
  ${tw`w-7 h-7 rounded-full`};
  ${tw`md:(w-8 h-8) xl:(w-10 h-10)`};
  ${tw`m-4 md:(m-3) xl:(m-1)`};
  ${tw`bg-gold text-black`};
  ${tw`flex items-center justify-center`};
  ${tw`text-[24px] md:(text-[28px]) xl:(text-[36px])`};
`;

//! ----------> COMPONENTS <----------
const Nav = ({ onClick, prev, ...rest }: Props) => {
  return (
    <Circle onClick={onClick} {...rest} aria-label={prev ? `Previous Slide` : `Next Slide`}>
      {prev ? <FiArrowLeftCircle strokeWidth={1.5} /> : <FiArrowRightCircle strokeWidth={1.5} />}
    </Circle>
  );
};

export default Nav;
