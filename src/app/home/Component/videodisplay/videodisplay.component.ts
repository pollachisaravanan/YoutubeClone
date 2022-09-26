import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrendingserviceService } from 'src/app/trending/Services/trendingservice.service';
import { HomeserviceService } from '../../Services/homeservice.service';

@Component({
  selector: 'app-videodisplay',
  templateUrl: './videodisplay.component.html',
  styleUrls: ['./videodisplay.component.scss']
})
export class VideodisplayComponent implements OnInit {
  iddata:any;
  id:any;
  relatedVideo:any=[]
  videodata:any=[];
  singledata:any=[];
  constructor(private _queryrouter:ActivatedRoute,private _homeServive:HomeserviceService,private _router:Router) { }

  ngOnInit(): void {
    console.log(this._queryrouter.snapshot.params);
    this.id = this._queryrouter.snapshot.params['id'];
    this.iddata = "https://www.youtube.com/embed/"+this.id;
    console.log(this.iddata);
    this.videoget();
    this.relatedvideo();
  }
  videoget=()=>{
    this._homeServive.getvideodetails(this.id).subscribe((response:any)=>{
      console.log(response);
      this. videodata=  response['items'];
      console.log(this.videodata);
    })
    
  }
  relatedvideo=()=>{
    this._homeServive.getrelatedvideo(this.id).subscribe((response:any)=>{
      console.log(response)
      this.relatedVideo = response['items'];
      console.log(this.relatedVideo);
    })
  }
  suggest=(id:any)=>{
    console.log('hi');
    this._router.navigate(['/video',id]);
    this.ngOnInit();
  }

}
