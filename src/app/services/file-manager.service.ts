import { Injectable } from '@angular/core';
import * as fileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  constructor() { }

  downloadCv() {
    return fileSaver.saveAs('assets/Gerard_Marti_CV.pdf', 'CV_GerardMarti.pdf');
  }
}
