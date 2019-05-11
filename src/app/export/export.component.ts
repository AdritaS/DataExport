import { Component, OnInit, Input } from '@angular/core';
import { ExcelExportService } from '../_services/excel-export.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(private excelService: ExcelExportService) { }

  @Input() title: string
  @Input() data: Array<any>
  @Input() headers: Array<string>

  ngOnInit() {
  }

  excelExport() {
    this.excelService.generateExcel(this.title, this.data,this.headers)
  }

}
