import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];
  save() {
    console.log(0);
    console.log(11);
  }
  ngOnInit() {
    this.items = [
      {
        // style: { border: '2px solid red' }, add style item
        label: 'Flights',
        icon: 'fa-solid fa-plane-up text-info',
        routerLink: '/flights',
        command: () => {
          this.save(); // add method
        },
      },
      {
        label: 'Hotels',
        icon: ' fas fa-hotel text-info',
        routerLink: '/',
      },
      {
        label: 'FAQs',
        routerLink: '/',
      },
      {
        label: 'Blog',
        routerLink: '/',
      },
      {
        style: { marginLeft: 'auto' },

        label: 'Rgister',
        icon: 'pi pi-fw pi-power-off text-info',
        // url: 'https://en.wikipedia.org/wiki/Lionel_Messi'  //, add url
        items: [
          { label: 'Rgister', icon: 'pi pi-sign-in  text-ingo' },
          {
            label: 'log-In',
            icon: 'pi pi-sign-in text-info',
          },
          { label: 'Log -Out', icon: ' pi pi-sign-out text-danger' },
        ],
      },
    ];
  }
}
