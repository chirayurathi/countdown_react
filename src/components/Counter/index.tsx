import React, { useEffect, useRef, useState } from "react";
import Style from "./Counter.module.css";
import UnitCount from "./UnitCount";

const Counter = (props: { reset: boolean; toggleReset: () => void }) => {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(2);
  const [mins, setMins] = useState(2);
  const [secs, setSecs] = useState(2);
  const counter = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (props.reset) {
      let reset: number = 2;
      setDays(reset);
      setHours(reset);
      setMins(reset);
      setSecs(reset);
      counter.current = setInterval(
        () => getTimeDifference(reset, reset, reset, reset),
        1000
      );
      props.toggleReset();
    } else {
      counter.current = setInterval(
        () => getTimeDifference(days, hours, mins, secs),
        1000
      );
    }

    return () => {
      clearInterval(counter.current);
    };
  });

  const getTimeDifference = (
    days: number,
    hours: number,
    mins: number,
    secs: number
  ) => {
    let lsecs = secs - 1;
    let lmins = mins;
    let lhours = hours;
    let ldays = days;
    if (lsecs < 0) {
      lsecs = 59;
      lmins = lmins - 1;
      if (lmins < 0) {
        lmins = 59;
        lhours = lhours - 1;
        if (lhours < 0) {
          lhours = 23;
          ldays = ldays - 1;
          if (ldays < 0) {
            ldays = 0;
            lmins = 0;
            lhours = 0;
            lsecs = 0;
            clearInterval(counter.current);
          }
        }
      }
    }

    setDays(ldays);
    setHours(lhours);
    setMins(lmins);
    setSecs(lsecs);
  };

  return (
    <div className={Style.Counter}>
      <UnitCount type={"Days"} count={days} />
      <UnitCount type={"Hours"} count={hours} />
      <UnitCount type={"Mins"} count={mins} />
      <UnitCount type={"Secs"} count={secs} />
    </div>
  );
};
export default Counter;
