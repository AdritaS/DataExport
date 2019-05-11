import { Injectable } from '@angular/core';
import * as html2canvas from "html2canvas"
import { SaveFileService } from './save-file.service';

@Injectable({
  providedIn: 'root'
})
export class ImageExportService {

  constructor(private fileSaver: SaveFileService) { }

  saveImage(selector: string, title: string) {
    var content = document.getElementById(selector)
    if (content) {
      html2canvas(content).then(canvas => {
        this.fileSaver.saveFile(canvas.toDataURL("image/jpeg"), title, 'jpeg')
      });
    }
  }

}
