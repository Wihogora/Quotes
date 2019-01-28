import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Quotesclass } from '../quotesclass';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes:Quotesclass;
  @Output() isComplete= new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
