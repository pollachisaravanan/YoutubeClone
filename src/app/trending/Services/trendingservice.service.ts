import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingserviceService {
  apikey = 'AIzaSyD7D8SVNUYYrfT4cFDfBs1clpkSlpP-_Ys';
  constructor(private _http:HttpClient) { }

  gettrending=()=>{
    return this._http.get('/proxy/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key='+this.apikey);
  }
}
