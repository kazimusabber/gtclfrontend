import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = ({ data }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn && <CountUp start={0} end={data} duration={2} delay={0} />}
      </ScrollTrigger>
    </>
  );
};

export default CounterUp;
