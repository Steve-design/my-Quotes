import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote = [
    {id:1,quote:'Energy is precious, use your energy to build not to destroy',author:'Constance Chuks Friday'},
    {id:2,quote:'The sensation of energy expands with increasing relaxation',author:'Ilchi Lee'},
    {id:3,quote:'The more you lose yourself in something bigger than yourself, the more energy you will have',author:'Norman Vincent Peal'},
    {id:4,quote:'A person of intellect without energy added to it, is a failure',author:'Sebastien-Roch Nicolas De Chamfort'},
    {id:5,quote:'Energy and persistence alter all things',author:'Benjamin Franklin'},
    {id:6,quote:"Nearly all men can stand adversity, but if you want to test a man's character, give him power",author:'Abraham Lincoln'},
    {id:7,quote:'I wonder if fears ever really go away, or if they just lose their power over us',author:'Veronica Roth'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
