import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../Services/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeoutputdata:any=[];
  constructor(private _homeService:HomeserviceService) { }

  ngOnInit(): void {
    this._homeService.getHomeData().subscribe((res:any)=>{
      console.log(res);
      this.homeoutputdata = res['items'];
      for(var i=0;i<this.homeoutputdata.length;i++)
      {
        this.homeoutputdata[i].logo = 'assets/images/logo1.jpg';
      }
      console.log(this.homeoutputdata);
    })

  }

}
