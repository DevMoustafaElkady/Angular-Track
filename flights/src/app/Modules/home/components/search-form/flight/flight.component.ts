import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit {
  // isClick: boolean = false;
  bsValue = new Date();
  bsRangeValue: Date[] = [];
  maxDate = new Date();

  displayCalendar: boolean = false;
  stateOptions: any[] = [];
  value1: string = 'off';
  isdropping: boolean = false;
  rangeDates: Date[] = [];
  count: number = 1;
  children: number = 0;
  Infant: number = 0;
  childrens: any[] = [];
  selectedCity3: string = '';
  total: number = 1;
  cities: any[] = [];
  flight: FormGroup = new FormGroup({
    search: new FormControl(null),
    calendar: new FormControl(null),
  });

  constructor() {}

  ngOnInit(): void {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    this.stateOptions = [
      {
        label: 'One Way',
        value: 'One-Way',
        styleClass: 'rounded-pill ms-2 p-1',
      },
      {
        label: 'Round Trip',
        value: 'Round-Trip',
        styleClass: 'rounded-pill ms-2 p-1',
      },
    ];
    this.cities = [
      { name: '2  years old' },
      { name: ' 3 years old' },
      { name: ' 4 years old' },
      { name: ' 5 years old' },
      { name: '6  years old' },
      { name: '7  years old' },
      { name: '  8years old' },
      { name: ' 9 years old' },
      { name: '10 years old' },
      { name: ' 11 years old' },
    ];
  }
  oncountersChanged(type: string) {
    type == 'plus' ? this.count++ : this.count--;
    console.log(this.count);
    this.total = this.children + this.count + this.Infant;
  }
  oncountersChildren(type: string) {
    type == 'plus' ? this.children++ : this.children--;

    this.total = this.children + this.count + this.Infant;
    console.log(this.childrens);
  }
  oncountersInfant(type: string) {
    type == 'plus' ? this.Infant++ : this.Infant--;

    this.total = this.children + this.count + this.Infant;
  }

  cabintype(type: any) {
    console.log(type);
  }

  onChange(event: any) {
    const { value } = event;
    console.log(value);
    if (value == 'One-Way') {
      this.displayCalendar = false;
    } else {
      this.displayCalendar = true;
    }
  }
}
