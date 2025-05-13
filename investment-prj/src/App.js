import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import ResultTable from "./components/Result/ResultTable";

function App() {
  const convertToCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount);
  const [tableData, setTableData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let totalInterest = 0;

    let { currentSavings } = userInput;
    const { yearlyContribution, duration, expectedReturn } = userInput;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * (expectedReturn / 100);
      totalInterest += yearlyInterest;

      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: convertToCurrency(currentSavings),
        yearlyInterest: convertToCurrency(yearlyInterest),
        totalInterest: convertToCurrency(totalInterest),
        totalInvestedCapital: convertToCurrency(
          yearlyContribution + currentSavings
        ),
      });

      setTableData(yearlyData);
    }
  };

  const resetHandler = () => {
    setTableData([]);
  };

  return (
    <div>
      <Header logo={logo} />
      <InvestmentForm onSubmitForm={calculateHandler} onReset={resetHandler} />
      <ResultTable tableData={tableData} />
    </div>
  );
}

export default App;
