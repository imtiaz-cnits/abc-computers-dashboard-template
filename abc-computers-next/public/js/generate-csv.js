const generateCSV = (table) => {
  let csv = [];
  const rows = table.querySelectorAll("tr");

  console.log(rows);

  rows.forEach((row) => {
    const cols = row.querySelectorAll("td, th");
    let rowData = [];
    cols.forEach((col) => rowData.push(col.innerText));
    csv.push(rowData.join(","));
  });

  const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
  const downloadLink = document.createElement("a");
  downloadLink.download = "data.csv";
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.click();
};

export default generateCSV;
