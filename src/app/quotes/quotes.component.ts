import { Component, OnInit } from '@angular/core';
import { Quotesclass } from '../quotesclass';
@Component({
  selector: '.app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  newquotes= new Quotesclass(0,"","",new Date()); 
  quotes=[
    new Quotesclass (1,'I am amazed by the believer. Verily, Allah does not decree anything for the believer except what is good for him.','Muhammad saw',new Date(2019,1,15)),
    new Quotesclass (2,'The days of life pass away like clouds, so do good while you are alive.','gandhi',new Date(2018,12,15)),
    new Quotesclass (3, 'Truth lifts the heart like water refreshes thirst.','gandhi',new Date(2019,1,20)),
    new Quotesclass (4, 'And We have not sent you but as a mercy to the worlds.','Quran',new Date(2018,12,30)),
    
  ]





  
  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
completeGoal(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }
      goalComplete(){
        let goalLength = this.quotes.length;
        this.newquotes.id=goalLength+1;
        this.newquotes.completeDate = new Date(this.newquotes.completeDate)
        this.quotes.push(this.newquotes)

        // submitquotes(){
          // this.addquotes.emit(this.newquotes);
          // this.newquotes=new Quotesclass(0,"","",new Date()); 
      // }
    }
  constructor() { }

  ngOnInit() {
  }

}
