import { Component, OnInit } from '@angular/core';
import { Quotesclass } from '../quotesclass';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[
    new Quotesclass (1,'I am amazed by the believer. Verily, Allah does not decree anything for the believer except what is good for him.,Muhammad saw'),
    new Quotesclass (2,'The days of life pass away like clouds, so do good while you are alive.,gandhi'),
    new Quotesclass (3, 'Truth lifts the heart like water refreshes thirst.,gandhi'),
    new Quotesclass (4, 'And We have not sent you but as a mercy to the worlds.,Quran'),
    
  ]
  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
completeGoal(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }
  constructor() { }

  ngOnInit() {
  }

}
