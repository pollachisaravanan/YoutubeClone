import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingserviceService } from '../../Services/trendingservice.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendingdata:any;
  constructor(private _trendingservice:TrendingserviceService, private _router:Router) { }

  ngOnInit(): void {
    this._trendingservice.gettrending().subscribe((response:any)=>{
      console.log(response);
      this.trendingdata =  response['items'];
      console.log(this.trendingdata);
      for(var i=0;i<this.trendingdata.length;i++)
      {
        this.trendingdata[i].logo = 'assets/images/logo1.jpg';
      }
    })
  }

  gotovideo=(id:any)=>{
    this._router.navigate(['video',id]);
  }

}
