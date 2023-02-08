import { Component } from '@angular/core';
import { PokerService } from '../services/poker.service';
import { dealCardRes } from '../services/DTO/deal-card-res';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  cardText: string = "";

  constructor(private pokerService: PokerService){}

  deal(){
    this.pokerService.deal().subscribe((response: dealCardRes) => {
      console.log("button clicked");
      this.cardText = response.cardText
    });
  }
}
