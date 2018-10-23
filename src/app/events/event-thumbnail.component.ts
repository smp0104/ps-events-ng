import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  ngOnInit() {  }
 clickforLog() {
  console.log('Output to Thumbnail component');
  console.log(this.event);
 }
}
