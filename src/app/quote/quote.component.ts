import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1,name:'Energy is precious, use your energy to build not to destroy',author:'Constance Chuks Friday',source:'Gerry Cop Times'},
    {id:2,name:'The sensation of energy expands with increasing relaxation',author:'Ilchi Lee',source:'Japan Daily'},
    {id:3,name:'The more you lose yourself in something bigger than yourself, the more energy you will have',author:'Norman Vincent Peal',source:'New York Times'},
    {id:4,name:'A person of intellect without energy added to it, is a failure',author:'Sebastien-Roch Nicolas De Chamfort',source:'Alegro'},
    {id:5,name:'Energy and persistence alter all things',author:'Benjamin Franklin',source:'Old is Gold Editors'},
    {id:6,name:"Nearly all men can stand adversity, but if you want to test a man's character, give him power",author:'Abraham Lincoln',source:'Old is Gold Editors'},
    {id:7,name:'I wonder if fears ever really go away, or if they just lose their power over us',author:'Veronica Roth',source:'Push Release Monthly'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
