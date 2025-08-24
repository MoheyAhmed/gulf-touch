"use client";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CounterBox = ({ target = 30, duration = 2000, icon, label }) => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false); // علشان مايتعدش تاني
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);

            // start counting
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));

            const timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === target) clearInterval(timer);
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 } // لما 50% من العنصر يظهر في الشاشة
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration, hasCounted]);

  return (
    <div ref={ref} className="text-center">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          className="mb-5 text-[#be9b3f] p-5 border-2 border-[#be9b3f] rounded-3xl"
        />
      )}

      <h3 className="text-3xl text-[#615f5f] font-bold mb-2">+{count}</h3>

      {label && (
        <h3 className="text-2xl text-[#766e6e] font-bold mb-2">{label}</h3>
      )}
    </div>
  );
};

export default CounterBox;
