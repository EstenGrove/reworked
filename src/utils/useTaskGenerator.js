import { useState } from "react";

export const useTaskGenerator = ({ task }) => {
  const [newTask, setNewTask] = useState(null);

  return {
    newTask,
    setNewTask
  };
};
