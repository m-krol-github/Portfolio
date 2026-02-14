import { useEffect, useRef, useState } from "react";

export function useLocalTimer({ reverse = false, targetTime = 0, loop = false }) {
  const [seconds, setSeconds] = useState(reverse ? targetTime : 0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        const next = reverse ? prev - 1 : prev + 1;

        if (reverse && next < targetTime) {
          return loop ? targetTime : prev;
        }

        if (!reverse && next > targetTime) {
          return loop ? 0 : prev;
        }

        return next;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const toggle = (shouldRun) => {
    if (shouldRun) start();
    else stop();
  };

  const reset = () => {
    setSeconds(reverse ? targetTime : 0);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return {
    time: { s: seconds },
    toggle,
    reset,
  };
}