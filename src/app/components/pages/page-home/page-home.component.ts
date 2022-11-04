import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  registerState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleRegister(): void {
    this.registerState = !this.registerState;
    console.log('triggered state' + this.registerState);
  }
}
