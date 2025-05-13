import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  const expensesContent = expenses.map((expense) => (
    <ExpenseItem key={expense.id} expense={expense} />
  ));

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
