import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  isdropping: boolean = false;
  rangeDates: Date[] = [];
  count: number = 1;
  children: number = 0;
  childrens: any[] = [];
  selectedCity3: string = '';
  total: number = 1;
  cities: any[] = [
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
  hotel: FormGroup = new FormGroup({
    search: new FormControl(null),
    calendar: new FormControl(null),
  });
  constructor() {}

  ngOnInit(): void {}
  oncountersChanged(type: string) {
    type == 'plus' ? this.count++ : this.count--;
    console.log(this.count);
    this.total = this.children + this.count;
  }
  oncountersChildren(type: string) {
    let dropdown = [
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

    if (type == 'plus') {
      this.children++;
      this.childrens.push(dropdown);
    } else {
      this.children--;
      this.childrens.pop();
    }
    this.total = this.children + this.count;
  }
  getFormData(p: any) {
    console.log(p.value);
    console.log(this.childrens);
  }
}
