"use client";

import CountUp from "react-countup";

// Calendar months since you started at Apptron (Sep 2026), counting the current month.
// It updates by itself, so you never have to edit "3 months" by hand.
const START = new Date(2026, 8, 1); // month index 8 = September
const now = new Date();
const months = Math.max(
  1,
  (now.getFullYear() - START.getFullYear()) * 12 +
    (now.getMonth() - START.getMonth()) +
    1,
);

// Keep these numbers true and in sync with the rest of the portfolio
const stats = [
  {
    num: months,
    text: `${months === 1 ? "Month" : "Months"} of industry experience`,
  },
  { num: 13, text: "Projects completed" },
  { num: 10, text: "Technologies mastered" },
  { num: 2276, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* mobile: 2 x 2 grid of small cards | desktop: one row */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-1 xl:gap-4 rounded-xl border border-white/10 bg-[#27272c]/70 px-3 py-5 text-center xl:rounded-none xl:border-0 xl:bg-transparent xl:p-0 xl:text-left"
            >
              <CountUp
                end={item.num}
                duration={2.5}
                delay={0.3}
                enableScrollSpy
                scrollSpyOnce
                className="text-4xl xl:text-6xl font-extrabold text-accent xl:text-white"
              />
              <p className="text-sm xl:text-base leading-snug text-white/80 xl:max-w-[150px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
