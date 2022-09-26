import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchserviceService } from 'src/app/searchservice.service';
import { HomeserviceService } from '../../Services/homeservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchid:any='';
  constructor(private _searchService:SearchserviceService, private _homeservice:HomeserviceService,private _router:Router) { }
  searchdata:any=[];
  ngOnInit(): void {
    this._searchService.getValue().subscribe(data=>{
      this.searchid = data;
      this.apicall(this.searchid);
    })
    
  }
  apicall=(data:any)=>{
    this._homeservice.getsearch(data).subscribe((res:any)=>{
      this.searchdata = res['items'];
      for(var i=0;i<this.searchdata.length;i++)
      {
        this.searchdata[i].logo = 'assets/images/logo1.jpg';
      }
      console.log(this.searchdata);
    })
    
  }
  gotovideo=(id:any)=>{
    console.log(id);
    this._router.navigate(['video',id]);
  }

}
