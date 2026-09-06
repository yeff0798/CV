/**
 * script.js - Control de interacciones del CV
 */
document.addEventListener('DOMContentLoaded', () => {
  const printButton = document.getElementById('btn-print');

  if (printButton) {
    printButton.addEventListener('click', () => {
      // Abre la ventana de impresión nativa del navegador para exportar directamente a PDF
      window.print();
    });
  }
});