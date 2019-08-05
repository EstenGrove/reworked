import { useState, useEffect } from "react";
import { getDaysInMonth } from "date-fns";

export const useFetchTasks = (mo = new Date(), api, headers) => {
  const [month, setMonth] = useState(getDaysInMonth(mo));
  const [curTasks, setCurTasks] = useState(null);

  const fetchTasks = async () => {
    try {
      const req = await fetch(api, headers);
      const res = await req.json();
      return setCurTasks(res);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    month,
    setMonth,
    fetchTasks
  };
};
