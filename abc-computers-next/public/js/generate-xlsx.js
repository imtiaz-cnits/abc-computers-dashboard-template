import * as XLSX from "xlsx";
const generateXLSX = (area) => {
  const wb = XLSX.utils.table_to_book(area);

  XLSX.writeFile(wb, "data.xlsx", { encoding: "UTF-8" });
};

export default generateXLSX;
