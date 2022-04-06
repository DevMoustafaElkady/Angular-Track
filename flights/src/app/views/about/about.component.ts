import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  overview: any[] = [
    {
      img: '/search-filght-1621824866.svg',
      title: ' Search flight',
      overview:
        'Search preferred flights and available deals by choosing your destination, your trip (one way, round trip or multi cities), arrival date, return date, number of travelers, class.',
    },
    {
      img: '/book-infomation-1621824942.svg',
      title: ' 2. Fill in information',
      overview:
        "Fill in the online form for all passengers with full names, gender, date of birth, passport details as they appear on the passenger's passport, and contact details",
    },
    {
      img: '/make-the-payment-1621824967.svg',
      title: ' 3. Payment',
      overview: `Pay your booking to secure reservations either by Credit / Debit card, Paypal Account, or wire transfer to our HSBC Bank account.
    After payment, you may receive a follow-up email from our team for further `,
      supp: 'support.',
    },
    {
      img: '/book-ticket-1621824984.svg',
      title: ' Search flight',
      overview: `After payment is verified successfully, we will issue an E-Ticket and send it to you via email.
    Print off your E-Ticket and make sure you keep it with you at all times during travel.`,
    },
  ];
  experience: any[] = [
    { title: 'baggage', icon: `fa-solid fa-suitcase fw-bolder fa-4x` },
    { title: 'E-Uprade', icon: `fa-solid fa-object-ungroup fw-bolder fa-4x` },
    { title: 'Louges', icon: `fa-solid fa-earth-oceania fw-bolder fa-4x` },
    {
      title: 'print your Bag tag',
      icon: `fa-solid fa-cart-flatbed-suitcase fw-bolder fa-4x`,
    },
    { title: 'star trave Info', icon: `fa-solid fa-info fw-bolder fa-4x` },
  ];
  constructor() {}

  ngOnInit(): void {}
}
