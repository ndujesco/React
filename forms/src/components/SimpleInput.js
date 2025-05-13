import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [eneteredName, setEnteredName] = useState("");
  const [eneteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (eneteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  const nameInputClasses = eneteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!eneteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button type="">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
