import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../Model/Card'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{
  @Input() public cards:Card[] = [];
  @Input() position: number = 0;
}
