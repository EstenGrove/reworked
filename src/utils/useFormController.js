import { useState } from "react";

export const useFormController = callback => {
  const [inputs, setInputs] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  const dirtyHandler = val => {
    return val.length > 0 || val === true ? setIsDirty(true) : null;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(() => {
      return { ...inputs, [name]: value };
    });
    dirtyHandler(value);
  };

  const handleCheckbox = e => {
    const { name, checked, selected } = e.target;
    setInputs(() => {
      return { ...inputs, [name]: checked };
    });
    dirtyHandler(checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isDirty) {
      if (!callback) {
        return;
      }
      return callback();
    }
    return alert("Please fill out the form...");
  };
  return {
    isDirty,
    setIsDirty,
    inputs,
    handleChange,
    handleCheckbox,
    handleSubmit
  };
};
