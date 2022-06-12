import { HomeRoutes } from './home.routing';
import { HomeComponent } from 'src/app/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [HomeComponent ]
})
export class HomeModule { }
