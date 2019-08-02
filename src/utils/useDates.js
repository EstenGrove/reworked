import React, { useState, useEffect } from "react";
import {
  format,
  getDaysInMonth,
  startOfWeek,
  lastDayOfWeek,
  addWeeks,
  subWeeks,
  eachDay
} from "date-fns";

export const useDates = () => {
  // start of week Sunday
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date())
  );
  // end of week Sunday
  const [currentWeekEnd, setCurrentWeekEnd] = useState(
    lastDayOfWeek(currentWeekStart)
  );

  // format dates in current range
  const [dates, setDates] = useState();

  const getNextWeek = (startOfCurrent, endOfCurrent) => {
    setCurrentWeekStart(addWeeks(startOfCurrent, 1));
    setCurrentWeekEnd(addWeeks(endOfCurrent, 1));
  };

  const getPrevWeek = (startOfCurrent, endOfCurrent) => {
    setCurrentWeekStart(subWeeks(startOfCurrent, 1));
    setCurrentWeekEnd(subWeeks(endOfCurrent, 1));
  };

  function getDates(startDate, endDate) {
    const days = eachDay(startDate, endDate);
    const datesInRange = days.map(day => format(day, "D"));
    return setDates(datesInRange);
  }

  // side effect that watches that two main updater fns
  useEffect(() => {
    getDates(currentWeekStart, currentWeekEnd);
  }, [currentWeekStart, currentWeekEnd]);

  return {
    currentWeekStart,
    currentWeekEnd,
    getNextWeek,
    getPrevWeek,
    getDates,
    setDates,
    dates
  };
};
