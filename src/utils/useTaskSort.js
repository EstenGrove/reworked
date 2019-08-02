import { useState, useEffect } from "react";

export const useTaskSort = tasks => {
  const [dayTasks, setDayTasks] = useState(null);
  let week = {};

  const mon = tasks.filter(task => task.day === "Mon");
  const tues = tasks.filter(task => task.day === "Tues");
  const weds = tasks.filter(task => task.day === "Weds");
  const thurs = tasks.filter(task => task.day === "Thurs");
  const fri = tasks.filter(task => task.day === "Fri");
  const sat = tasks.filter(task => task.day === "Sat");
  const sun = tasks.filter(task => task.day === "Sun");

  week = {
    Monday: [mon],
    Tuesday: [tues],
    Wednesday: [weds],
    Thursday: [thurs],
    Friday: [fri],
    Saturday: [sat],
    Sunday: [sun]
  };

  setDayTasks(...week);

  return {
    dayTasks,
    setDayTasks
  };
};
