import { Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [
  ],
  providers: [MessageService]
})
export class UploadComponent implements OnInit {

  loading: boolean = false;

  constructor(private restService: RestService,
              private messageServicePnG: MessageService) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    this.loading = true;

    this.restService.uploadCv(event.files[0])
      .subscribe( resp => {
        this.loading = false;
        if(resp.ok) {
          this.messageServicePnG.add({key: 'uploadResponse', severity: 'success',
            summary: 'File Uploaded',
            detail: 'File uploaded successfully'})
        } else {
          this.messageServicePnG.add({key: 'uploadResponse', severity: 'error',
            summary: 'Error',
            detail: 'File not uploaded'})
        }
      });
  }



}
