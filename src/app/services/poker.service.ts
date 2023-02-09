import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PokerEndpoints } from './Poker.endpoints';
import { BetDTO } from '../Model/request_dto/bet';
import { ResGameState } from '../Model/response_dto/state';

import { of } from 'rxjs';
import { Card, CardNumber, CardSuit } from '../Model/Card';

@Injectable({
  providedIn: 'root'
})
export class PokerService {
  constructor(private http: HttpClient) { }

  private getHeaders(){
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
    headers=headers.append('Access-Control-Allow-Origin', '*');
    return headers
  }
  
  public getState(): Observable<ResGameState>{
    // return this.http.get<ResGameState>(environment.apiUrl + PokerEndpoints.STATE, {headers: this.getHeaders()});
    return of<ResGameState>({
      yourTurnFirst: false,

      dollars: 500,
      oppoent_dollars: 500,
      pot_dollars: 499,
      
      cards: [
        {faceUp: true, number: CardNumber.Eight, suit: CardSuit.Spade},
        {faceUp: true, number: CardNumber.Four, suit: CardSuit.Heart},
      ] as Card[],
      oppoent_cards: [
        {faceUp: false, number: CardNumber.Eight, suit: CardSuit.Spade},
        {faceUp: false, number: CardNumber.Four, suit: CardSuit.Heart},
      ] as Card[],
      table_cards: [
        {faceUp: false},
        {faceUp: true, number: CardNumber.Two, suit: CardSuit.Diamond},
        {faceUp: true, number: CardNumber.Eight, suit: CardSuit.Spade},
        {faceUp: true, number: CardNumber.Ten, suit: CardSuit.Spade},
      ] as Card[],
  
      opponentsAction: "called your 40$ bet",
  
      deal: true,
      fold: true,
      call: true,
      bet: true
    } as ResGameState);
  }
  public deal(): Observable<any>{
    return this.http.post<ResGameState>(environment.apiUrl + PokerEndpoints.DEAL, {}, {headers: this.getHeaders()});
  }
  public fold(): Observable<any>{
    return this.http.post<ResGameState>(environment.apiUrl + PokerEndpoints.FOLD, {}, {headers: this.getHeaders()});
  }
  public call(): Observable<any>{
    return this.http.post<ResGameState>(environment.apiUrl + PokerEndpoints.CALL, {}, {headers: this.getHeaders()});
  }
  public bet(dollars: number): Observable<any>{
    return this.http.post<ResGameState>(environment.apiUrl + PokerEndpoints.BET, { "dollars": dollars } as BetDTO, {headers: this.getHeaders()});
  }
  public allin(): Observable<any>{
    return this.http.post<ResGameState>(environment.apiUrl + PokerEndpoints.BET, {headers: this.getHeaders()});
  }
}
