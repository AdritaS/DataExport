import { Component, OnInit, Input } from '@angular/core';
import { ExcelExportService } from '../_services/excel-export.service';
import { ImageExportService } from '../_services/image-export.service';
import { PdfService } from '../_services/pdf.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(private excelService: ExcelExportService, private imageService: ImageExportService, private pdfService: PdfService) { }

  @Input() title: string
  @Input() data: Array<any>
  @Input() headers: Array<string>
  @Input() selectorId: string
  @Input() isChart?: boolean

  ngOnInit() {
  }

  excelExport() {
    this.excelService.generateExcel(this.title, this.data, this.headers, this.isChart ? this.selectorId : null)
  }

  imageExport() {
    this.imageService.saveImage(this.selectorId, this.title)
  }

  pdfDownload() {
    if (this.isChart) {
      this.pdfService.generateChartToPdf(this.selectorId, this.title)
    } else {
      this.pdfService.generateHtmlTableToPdf(this.selectorId, this.title)
    }
  }

}
