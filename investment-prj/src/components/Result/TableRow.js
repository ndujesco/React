const TableRow = ({ data }) => {
  const {
    year,
    savingsEndOfYear,
    yearlyInterest,
    totalInvestedCapital,
    totalInterest,
  } = data;
  return (
    <tr>
      <td>{year}</td>
      <td>{savingsEndOfYear}</td>
      <td>{yearlyInterest}</td>
      <td>{totalInterest}</td>
      <td>{totalInvestedCapital}</td>
    </tr>
  );
};

export default TableRow;
