import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  searchSubject = new Subject();
  constructor(private _http:HttpClient) { }
  sendValue = (data:any)=>{
    this.searchSubject.next(data);
  }
  getValue =() =>{
    return this.searchSubject.asObservable();
  }
}
