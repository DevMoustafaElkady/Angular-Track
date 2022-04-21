import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ngx bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const ngx = [
  BrowserAnimationsModule,
  BsDatepickerModule.forRoot(),
  BsDropdownModule,
  BsDropdownModule.forRoot(),
];
//primeng

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { FlightComponent } from './components/search-form/flight/flight.component';
import { HotelComponent } from './components/search-form/hotel/hotel.component';
import { SelectButtonModule } from 'primeng/selectbutton';
const primeng = [
  TabViewModule,
  ButtonModule,
  InputTextModule,
  CalendarModule,
  DropdownModule,
  SelectButtonModule,
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchFormComponent,
    FlightComponent,
    HotelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    primeng,
    ngx,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
