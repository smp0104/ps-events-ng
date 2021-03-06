import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  ngOnInit() {  }

}
