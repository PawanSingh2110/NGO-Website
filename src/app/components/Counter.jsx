"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [count, setCount] = useState(false);

  return (
    <div className="counter-img h-[50vh] xl:h-[25vh] flex justify-center items-center">
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
        threshold={0.5}
      >
        <div className="grid grid-cols-2 xl:grid-cols-4 items-center gap-5 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-medium">
              {count && <CountUp start={0} end={30} duration={2.75} />}+
            </h1>
            <p>Years of People For Animals</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-medium">
              {count && <CountUp start={0} end={5} duration={2.75} />}L+
            </h1>
            <p>Members</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-medium">
              {count && <CountUp start={0} end={160} duration={2.75} />}+
            </h1>
            <p>PFA Units</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-medium">More</h1>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
