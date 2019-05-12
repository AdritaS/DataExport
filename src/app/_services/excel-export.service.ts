import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { SaveFileService } from './save-file.service';
import * as html2canvas from "html2canvas"

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  constructor(private fileSaver: SaveFileService) { }

  generateExcel(title: string, jsondata: Array<any>, headers: Array<string>, imageSelectorId?: string) {
    let data: Array<any> = []

    //Format json data
    jsondata.forEach(element => {
      let rowData: Array<string> = []
      Object.keys(element).forEach(function (key, index) {
        rowData.push(element[key])
      });
      data.push(rowData)
    });

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Data');


    //Add Row and formatting
    let titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Calibri', family: 4, size: 14, bold: true }
    worksheet.addRow([]);

    worksheet.mergeCells('A1:D2');


    //Blank Row 
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(headers);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'cccccc' },
        bgColor: { argb: 'cccccc' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })

    worksheet.addRows(data);

    for (var i = 1; i <= headers.length; i++) {
      worksheet.getColumn(i).width = 30;
    }
    worksheet.addRow([]);

    if (imageSelectorId) {

      let chartworksheet = workbook.addWorksheet('Chart');

      let titleRow1 = chartworksheet.addRow([`${title} - Chart`]);
      titleRow1.font = { name: 'Calibri', family: 4, size: 14, bold: true }
      chartworksheet.addRow([]);

      var content = document.querySelector(imageSelectorId)
      if (content) {
        html2canvas(content).then(canvas => {
          let logo = workbook.addImage({
            base64: canvas.toDataURL("image/jpeg"),
            extension: 'jpeg',
          });

          chartworksheet.addImage(logo, 'A4:J22');

          //Generate Excel File with given name
          workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            this.fileSaver.saveFile(blob, title, 'xlsx')
          })
        });
      }
    } else {
      //Generate Excel File with given name
      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        this.fileSaver.saveFile(blob, title, 'xlsx')
      })
    }
  }
}
