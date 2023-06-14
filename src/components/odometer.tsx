import { useSpring, animated as a } from "react-spring";
import type { AnimatedProps } from "react-spring";
import "twin.macro";

export type OdometerProps = {
  value: number;
  showDecimal?: boolean;
};

const Odometer = ({ value, showDecimal }: OdometerProps) => {
  const spring = useSpring({
    number: value,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <a.span style={spring as AnimatedProps<any>} tw="font-normal!">
      {spring.number.to((x) =>
        showDecimal ? x.toFixed(1).toLocaleString() : Math.round(x).toLocaleString()
      )}
    </a.span>
  );
};

export default Odometer;
