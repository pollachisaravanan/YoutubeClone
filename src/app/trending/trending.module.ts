import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from './Component/trending/trending.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    HttpClientModule
  ]
})
export class TrendingModule { }
