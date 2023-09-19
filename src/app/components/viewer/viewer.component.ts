import { Component, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from "ngx-csv-parser";
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  file: any;
  records: any[] = [];
  headers: any[] = [];
  header: boolean = false;
  view = false;

  constructor(private ngxCsvParser: NgxCsvParser, private fileService: FileService) {}
  ngOnInit(): void {
    this.fileService.getFile().subscribe(x=> {
      this.file = x
      this.display();
    });
  }
  display(): void {
    this.ngxCsvParser.parse(this.file, {header: this.header, delimiter: ',', encoding: 'utf8'})
    .pipe().subscribe({
      next: (res: any): any => {
        this.headers = res[0];
        this.records = res.slice(1);
        this.view = true;
      },
      error: (error: NgxCSVParserError): void => {
        console.log(error);

      }
    })
  }
}
