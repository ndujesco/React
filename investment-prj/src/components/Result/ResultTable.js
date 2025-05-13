import styles from "./ResultTable.module.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const ResultTable = ({ tableData }) => {
  if (tableData.length === 0) {
    return <p>No Results</p>;
  }
  return (
    <table className={styles.result}>
      <TableHead />
      <TableBody tableData={tableData} />
    </table>
  );
};

export default ResultTable;
