import moment from "moment";
import React from "react";
import '../App.css';

export default function CalenderHeader({ value, setValue }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }
  function prevMonth() {
    return value.clone().subtract(1, "month");
  }
  function nextMonth() {
    return value.clone().add(1, "month");
  }

  return (
    <div className="header">
      <div
        className="button-container-calendar button "
        onClick={() => setValue(prevMonth())}
      >
        {String.fromCharCode(171)}
      </div>
      <div className="current">
        {" "}
        {currMonthName()} {currYear()}{" "}
      </div>
      <div
        className="button-container-calendar button "
        onClick={() => setValue(nextMonth())}
      >
        {String.fromCharCode(187)}
      </div>
    </div>
  );
}
