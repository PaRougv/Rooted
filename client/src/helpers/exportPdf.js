import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Capture a DOM element and export it as a PDF.
 * @param {string} selector - CSS selector for the element to capture
 * @param {string} filename - Output filename (without .pdf)
 */
export const exportToPdf = async (selector, filename = "rooted-report") => {
  const el = document.querySelector(selector);
  if (!el) return;

  // Temporarily expand for full capture
  const origOverflow = el.style.overflow;
  const origMaxH = el.style.maxHeight;
  el.style.overflow = "visible";
  el.style.maxHeight = "none";

  try {
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const imgW = canvas.width;
    const imgH = canvas.height;

    // A4 dimensions in mm
    const pdfW = 210;
    const pdfH = (imgH * pdfW) / imgW;

    const pdf = new jsPDF({
      orientation: pdfH > 297 ? "portrait" : "portrait",
      unit: "mm",
      format: [pdfW, Math.max(pdfH, 297)],
    });

    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
    pdf.save(`${filename}.pdf`);
  } finally {
    el.style.overflow = origOverflow;
    el.style.maxHeight = origMaxH;
  }
};
