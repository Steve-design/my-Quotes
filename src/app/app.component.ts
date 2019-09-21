import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Energy is precious, use your energy to build not to destroy', 'The sensation of energy expands with increasing relaxation', 'The more you lose yourself in something bigger than yourself, the more energy you will have']
  } 
}