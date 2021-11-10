import React, { useState, useEffect } from "react";
import "../App.css";

import buildCalender from "./build";
import dayStyles, { beforeToday } from "./Styles";
import Header from "./header";

export default function Calender({value, onChange}) {
  const [calender, setCalender] = useState([]);


  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);
  console.log(value);
  return (
    <div className="calendar">
      <Header value={value} setValue={onChange} />
      <div className="body">
        <div className="day-names">
          {["sun", "mon", "tues", "wed", "thurs", "fri", "sat"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {calender.map((week) => (
          <div>
            {week.map((day) => (
              <div
                className="day"
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
