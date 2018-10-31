import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

declare let toastr;
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events ;
  // tslint:disable-next-line:no-inferrable-types
  enableLogButton: boolean = false;

  constructor(private eventService: EventsService) {
   }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  clickforLog() {
  console.log('Output to Thumbnail component');
  console.log(this.events);
  toastr.info('Hit Ctrl+Shift+J to view data');
  toastr.error('Hit Ctrl+Shift+J to view data');
 }
 thumbnailClick(eventName) {
  toastr.success(eventName, {closeButton: true});
 }

}
