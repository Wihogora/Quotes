import { Component } from '@angular/core';
import { Quotesclass } from './quotesclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // quotes=[
  //   new Quotesclass (1,'I am amazed by the believer. Verily, Allah does not decree anything for the believer except what is good for him.'),
  //   new Quotesclass (2,'The days of life pass away like clouds, so do good while you are alive.'),
  //   new Quotesclass (3, 'Truth lifts the heart like water refreshes thirst.'),
  //   new Quotesclass (4, 'And We have not sent you but as a mercy to the worlds.'),
    
  // ]
  constructor() { }

  ngOnInit() {
  }
}
