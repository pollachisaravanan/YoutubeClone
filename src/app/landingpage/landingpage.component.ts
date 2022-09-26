import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchserviceService } from '../searchservice.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  constructor(private _searchservice:SearchserviceService, private _router:Router){}
  show =false;
  opened = false;
  bool = false;
  ngOnInit(): void {

  }
  getValueSearch(data:any){
    this._searchservice.sendValue(data);
    this._router.navigate(['search']);
  }

  showaccount=()=>{
    this.show = !this.show
    console.log(this.show);
  }

}
