import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingserviceService {
  apikey = 'AIzaSyDZImJga5DBPPzvj0wzFesaVrySYvnHoIc';
  constructor(private _http:HttpClient) { }

  gettrending=()=>{
    return this._http.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key='+this.apikey);
  }
}
