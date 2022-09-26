import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  apikey = 'AIzaSyDZImJga5DBPPzvj0wzFesaVrySYvnHoIc';
  constructor(private _homehttp:HttpClient) { }
  getHomeData=()=>{
    return this._homehttp.get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=1000&key='+this.apikey);
    
  }
  getsearch = (data:any) =>{
    console.log('hi');
    return this._homehttp.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+data+'&key='+this.apikey)
  }
  getvideodetails=(data:any)=>{
    console.log(typeof(data));
    console.log(data);
    return this._homehttp.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+data+'&key='+this.apikey)
  }
  getrelatedvideo=(data:any)=>{
    return this._homehttp.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='+data+'&type=video&key='+this.apikey)
  }
}
