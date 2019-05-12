import { Injectable } from '@angular/core';
import * as html2canvas from "html2canvas"
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generateHtmlTableToPdf(selector: string, title: string) {

    var doc = new jsPDF();

    doc.text(title, 10, 10)

    doc.autoTable({ html: selector });

    doc.save(`${title}.pdf`);
  }

  generateChartToPdf(selector: string, title: string) {

    var doc = new jsPDF();

    var content = document.querySelector(selector)

    html2canvas(content).then(canvas => {

      doc.addImage(canvas.toDataURL("image/jpeg"), 'JPEG', 15, 40, 180, 110);
      doc.save(`${title}-chart.pdf`);

    });

  }
}
