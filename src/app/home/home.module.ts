import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Component/search/search.component';
import { VideodisplayComponent } from './Component/videodisplay/videodisplay.component';
import { SafePipe } from './Pipes/safe.pipe';
import { CustomdatepipePipe } from './Pipes/customdatepipe.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    VideodisplayComponent,
    SafePipe,
    CustomdatepipePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
