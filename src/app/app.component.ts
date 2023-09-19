import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fileService: FileService) {}
  title = 'CsvFileViewer';
  lastTarget: any = null;

isFile(evt: any) {
  var dt = evt.dataTransfer;

  for (var i = 0; i < dt.types.length; i++) {
    if (dt.types[i] === "Files") {
      return true;
    }
  }
  return false;
}

ngOnInit(): void {
  window.addEventListener("dragenter", (e) =>{
    if (this.isFile(e)) {
      this.lastTarget = e.target;
      document.querySelector(".dropzone")?.setAttribute("style", "visibility: ''");
      document.querySelector(".dropzone")?.setAttribute("style", "opacity: 1");
    }
  });

  window.addEventListener("dragleave", (e) =>{
    e.preventDefault();
    if (e.target === this.lastTarget || e.target === document) {
      document.querySelector(".dropzone")?.setAttribute("style", "visibility: hidden");
      document.querySelector(".dropzone")?.setAttribute("style", "opacity: 0");
    }
  });

  window.addEventListener("dragover", (e) =>{
    e.preventDefault();
  });

  window.addEventListener("drop", (e) =>{
    e.preventDefault();
    document.querySelector(".dropzone")?.setAttribute("style", "visibility: hidden");
    document.querySelector(".dropzone")?.setAttribute("style", "opacity: 0");
    if (e.dataTransfer?.files.length == 1) {
      this.fileService.setFile(e.dataTransfer.files[0]);
    }
  });
}
}
