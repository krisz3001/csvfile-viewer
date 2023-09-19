import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public file = new Subject<any>();
  constructor() { }

  setFile(f: any) {
    this.file.next(f);
  }

  getFile(): Observable<any> {
    return this.file.asObservable();
  }
}
