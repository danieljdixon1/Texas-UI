import { Component, Input, OnInit } from '@angular/core';
import { Card, CardNumber, CardSuit } from '../../Model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private baseCardArtPath: string = "assets/CardArt/";

  @Input() public card?: Card;
  @Input() position: number = 0;

  public path:string = "";

  ngOnInit(){
    this.path = this.getImageString();
  }

  getImageString(){
    let numberResult: string = "";
    switch(this.card?.number){
      case CardNumber.Ace: numberResult = "1" ;break;
      case CardNumber.Two: numberResult = "2" ;break;
      case CardNumber.Three: numberResult = "3" ;break;
      case CardNumber.Four: numberResult = "4" ;break;
      case CardNumber.Five: numberResult = "5" ;break;
      case CardNumber.Six: numberResult = "6" ;break;
      case CardNumber.Seven: numberResult = "7" ;break;
      case CardNumber.Eight: numberResult = "8" ;break;
      case CardNumber.Nine: numberResult = "9" ;break;
      case CardNumber.Ten: numberResult = "10" ;break;
      case CardNumber.Jack: numberResult = "J" ;break;
      case CardNumber.Queen: numberResult = "Q" ;break;
      case CardNumber.King: numberResult = "K" ;break;
    }

    let suitResult: string = "";
    switch(this.card?.suit){
      case CardSuit.Club: suitResult = "C" ;break;
      case CardSuit.Diamond: suitResult = "D" ;break;
      case CardSuit.Heart: suitResult = "H" ;break;
      case CardSuit.Spade: suitResult = "S" ;break;
    }
    console.log(this.baseCardArtPath)
    console.log(numberResult)
    console.log(suitResult)
    console.log(this.baseCardArtPath + numberResult + suitResult + ".svg")

    return this.baseCardArtPath + numberResult + suitResult + ".svg";
  }
}