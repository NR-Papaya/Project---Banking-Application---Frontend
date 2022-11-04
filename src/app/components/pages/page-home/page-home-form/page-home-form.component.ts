import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-home-form',
  templateUrl: './page-home-form.component.html',
  styleUrls: ['./page-home-form.component.css'],
})
export class PageHomeFormComponent implements OnInit {
  registerState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @Output()
  newViewEvent = new EventEmitter<boolean>();

  toggleEventFormView() {
    this.newViewEvent.emit(true);
    console.log('event triggered');
  }

  toggleRegister(): void {
    this.registerState = !this.registerState;
    this.toggleEventFormView();
    console.log('toggle Reg triggered in child' + this.registerState);
  }
}
