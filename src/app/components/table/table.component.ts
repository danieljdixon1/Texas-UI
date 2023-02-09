import { Component, OnInit } from '@angular/core';
import { PokerService } from '../../services/poker.service';
import { Card } from '../../Model/Card';
import { ResGameState } from '../../Model/response_dto/state'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public yourTurnFirst: boolean = true;

  public dollars: number = 0;
  public oppoent_dollars: number = 0;
  public pot_dollars: number = 0;
  
  public cards: Card[] = [];
  public oppoent_cards: Card[] = [];
  public table_cards: Card[] = [];

  public opponentsAction: string = "";

  public deal: boolean = true;
  public fold: boolean = false;
  public call: boolean = false;
  public bet: boolean = false;

  public betAmount: number = 15;

  constructor(private pokerService: PokerService){}

  ngOnInit(): void {
    this.pokerService.getState().subscribe((response: ResGameState) => {
      this.updateState(response);
    });
  }

  updateState(response: ResGameState){
    this.yourTurnFirst = response.yourTurnFirst;
    this.dollars = response.dollars;
    this.oppoent_dollars = response.oppoent_dollars;
    this.pot_dollars = response.pot_dollars;
    this.cards = response.cards;
    this.oppoent_cards = response.oppoent_cards
    this.table_cards = response.table_cards
    this.opponentsAction = response.opponentsAction
    this.deal = response.deal;
    this.fold = response.fold;
    this.call = response.call;
    this.bet = response.bet;
  }

  deal_button(){
    this.pokerService.deal().subscribe((response: ResGameState) => {
      this.updateState(response);
    });
  }

  fold_button(){
    this.pokerService.fold().subscribe((response: ResGameState) => {
      this.updateState(response);
    });
  }

  call_button(){
    this.pokerService.call().subscribe((response: ResGameState) => {
      this.updateState(response);
    });
  }

  bet_button(){
    this.pokerService.bet(15).subscribe((response: ResGameState) => {
      this.updateState(response);
    });
  }
  bet_keyup(event: any){
      this.betAmount = event.target.value;
  }

}
