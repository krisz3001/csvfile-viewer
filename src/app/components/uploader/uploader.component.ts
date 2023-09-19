import { Component, EventEmitter, Output } from '@angular/core';
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  file: any;

  constructor(private fileService: FileService) {}

  getFile(event: any){
    this.fileService.setFile(event.target.files[0]);
  }
}
