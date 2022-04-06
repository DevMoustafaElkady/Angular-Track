import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  cartona:any[]=[]
  title: string = 'mr';
  cities: any[] = [];
  selectedCategory: any = null;
  Gender: any[] = [
    { name: 'male', key: 'M' },
    { name: 'female', key: 'F' },
    { name: 'Other', key: 'R' },
  ];
  isWating:boolean=false;

  isSuccess:string=''
  // form
  contact :FormGroup =new FormGroup({
    first_name: new FormControl(null  , [Validators.required ,Validators.minLength(3), Validators.maxLength(15)] ),
    last_name: new FormControl(null  , [Validators.required ,Validators.minLength(3), Validators.maxLength(15)] ),
    email:new FormControl(null , [Validators.required , Validators.email]),
    choose:new FormControl(null, Validators.required),
    phone :new FormControl (null, [Validators.required , Validators.minLength(9) , Validators.maxLength(22)]),
    nationalit:new FormControl(null,Validators.required),
    nation:new FormControl(null,Validators.required),
    file:new FormControl(null,Validators.required),


  })

  constructor(public _DataService: DataService) {
  }
  ngOnInit(): void {

  }
  setGender(e: any) {
    if (e  == 'M') {
      this.title = 'mr';
    } else if (e == 'F') {
      this.title = 'mrs ';
    }
  }

  formContact()
{

  if ( this.contact.status== "VALID"){
    this.cartona.push(this.contact.value)
  localStorage.setItem('category' , JSON.stringify(this.cartona) )

    this.contact.reset();
    this.isSuccess='Success'
setTimeout(() => {
  this.isSuccess=''
}, 3000);
  }
}}
