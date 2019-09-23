import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
  new Quote  (1,'Energy is precious, use your energy to build not to destroy','Constance Chuks Friday','Gerry Cop Times',new Date(2019,4,56)),
  new Quote  (2,'The sensation of energy expands with increasing relaxation','Ilchi Lee','Japan Daily',new Date(2012,6,12)),
  new Quote  (3,'The more you lose yourself in something bigger than yourself, the more energy you will have','Norman Vincent Peal','New York Times',new Date(2007,10,23)),
  new Quote  (4,'A person of intellect without energy added to it, is a failure','Sebastien-Roch Nicolas De Chamfort','Alegro',new Date(2018,6,21)),
  new Quote  (5,'Energy and persistence alter all things','Benjamin Franklin','Old is Gold Editors',new Date(2019,5,30)),
  new Quote  (6,"Nearly all men can stand adversity, but if you want to test a man's character, give him power",'Abraham Lincoln','Old is Gold Editors',new Date(1997,3,24)),
  new Quote  (7,'I wonder if fears ever really go away, or if they just lose their power over us','Veronica Roth','Push Release Monthly', new Date(2003,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
