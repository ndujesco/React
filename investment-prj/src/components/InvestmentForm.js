import { useState } from "react";
import styles from "./InvestmentForm.module.css";

const InvestmentForm = ({ onSubmitForm, onReset }) => {
  const [currentSavingsInput, setCurrentSavingsInput] = useState("");
  const [yearlyContributionInput, setYearlyContributionInput] = useState("");
  const [expectedReturnInput, setExpectedReturnInput] = useState("");
  const [durationInput, setDurationInput] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    const data = {
      currentSavings: +currentSavingsInput,
      yearlyContribution: +yearlyContributionInput,
      expectedReturn: +expectedReturnInput,
      duration: +durationInput,
    };
    onSubmitForm(data);
  };

  const resetHandler = () => {
    onReset();
    setCurrentSavingsInput("");
    setYearlyContributionInput("");
    setExpectedReturnInput("");
    setDurationInput("");
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavingsInput}
            onChange={(event) => setCurrentSavingsInput(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContributionInput}
            onChange={(event) => setYearlyContributionInput(event.target.value)}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturnInput}
            onChange={(event) => setExpectedReturnInput(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={durationInput}
            onChange={(event) => setDurationInput(event.target.value)}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className={styles["button"]}
          onSubmit={submitFormHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
