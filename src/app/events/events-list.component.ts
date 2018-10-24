import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events = {
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 649.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
};
  // tslint:disable-next-line:no-inferrable-types
  enableLogButton: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
