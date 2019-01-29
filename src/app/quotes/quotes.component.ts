import { Component, OnInit } from '@angular/core';
import { Quotesclass } from '../quotesclass';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  newquotes= new Quotesclass(0,"","",1,2,"",new Date()); 
  quotes=[
    new Quotesclass (1,"First",'I am amazed by the believer. Verily, Allah does not decree anything for the believer except what is good for him.',1,2,'Muhammad saw',new Date(2019,1,15)),
    new Quotesclass (2,"second",'The days of life pass away like clouds, so do good while you are alive.',3,4,'gandhi',new Date(2018,12,15)),
    new Quotesclass (3,"third", 'Truth lifts the heart like water refreshes thirst.',5,6,'gandhi',new Date(2019,1,20)),
    new Quotesclass (4,"Fourth", 'And We have not sent you but as a mercy to the worlds.',7,8,'Quran',new Date(2018,12,30)),
    
  ]

  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
upvote(index){
  this.quotes[index].upvotes++;
}
downvote(index){
  this.quotes[index].downvotes++;
}



completequotes(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }
      quotesComplete(){
        let quotesLength = this.quotes.length;
        this.newquotes.id=quotesLength+1;
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
