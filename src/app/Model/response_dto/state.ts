import { Card, CardNumber, CardSuit } from "src/app/Model/Card";

export interface ResGameState{
    yourTurnFirst:boolean;

    dollars: number;
    oppoent_dollars: number;
    pot_dollars: number;
    
    cards: Card[];
    oppoent_cards: Card[];
    table_cards: Card[];

    opponentsAction: string;

    deal: boolean,
    fold: boolean,
    call: boolean,
    bet: boolean
}