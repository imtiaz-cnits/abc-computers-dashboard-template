import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (area) => {
  if (!area) return;
  const doc = new jsPDF();

  // Add the table content to the PDF
  doc.autoTable({
    html: area,
    startY: 10,
  });
  // Save the PDF
  doc.save("data.pdf");
};

export default generatePDF;
