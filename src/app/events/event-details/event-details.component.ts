import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event: any;
  constructor(private eventsService: EventsService, private routeParam: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventsService.getEvent(+this.routeParam.snapshot.params['id']);
  }

}
