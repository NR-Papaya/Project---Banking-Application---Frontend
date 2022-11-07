import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-home-form',
  templateUrl: './page-home-form.component.html',
  styleUrls: ['./page-home-form.component.css'],
})
export class PageHomeFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Output()
  newViewEvent = new EventEmitter<boolean>();

  toggleEventForm(value:boolean) {
    this.newViewEvent.emit(value);
    console.log('event triggered');
  }

}
