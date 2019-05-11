import { Component, OnInit, Input } from '@angular/core';
import { ExcelExportService } from '../_services/excel-export.service';
import { ImageExportService } from '../_services/image-export.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(private excelService: ExcelExportService, private imageService: ImageExportService) { }

  @Input() title: string
  @Input() data: Array<any>
  @Input() headers: Array<string>
  @Input() selectorId: string

  ngOnInit() {
  }

  excelExport() {
    this.excelService.generateExcel(this.title, this.data, this.headers)
  }

  imageExport() {
    debugger
    this.imageService.saveImage(this.selectorId, this.title)
  }

}
