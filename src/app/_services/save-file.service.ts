import { Injectable } from '@angular/core';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SaveFileService {

  constructor() { }

  saveFile(blobData: any, title: string, format: string) {
    title = title.replace(/[^A-Z0-9]+/ig, "_");
    fs.saveAs(blobData, `${title}.${format}`);
  }

}
