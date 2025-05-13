import TableRow from "./TableRow";

const TableBody = ({ tableData }) => {
  const tableRows = tableData.map((data) => {
    return <TableRow key={data.year} data={data} />;
  });

  return <tbody>{tableRows}</tbody>;
};

export default TableBody;
