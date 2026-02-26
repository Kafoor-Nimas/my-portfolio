"use client";

import CountUp from "react-countup";

const states = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {states.map((item, index) => {
            return (
              <div key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
