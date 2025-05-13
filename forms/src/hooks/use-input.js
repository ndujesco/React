import { useState } from "react";

const useInput = (validator) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validator(value);
  const hasError = !isValid && isTouched;
  const valueClasses = hasError ? "form-control invalid" : "form-control";

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    valueClasses,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
