import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pile',
  templateUrl: './pile.component.html',
  styleUrls: ['./pile.component.css']
})
export class PileComponent implements OnInit {
  @Input() dollars: number = 0;

  StackSmall: number = 0;
  StackMedium: number = 0;
  StackBig: number = 0;

  StackSmallFills: number = 0;
  StackMediumFills: number = 0;
  StackBigFills: number = 0;

  ngOnInit() {
    this.updatePileSize(this.dollars);
  }

  updatePileSize(current: number){
    while(current-100>=0){
      current-=100;
      this.StackBig +=1;
    }
    while(current-10>=0){
      current-=10;
      this.StackMedium +=1;
    }
    while(current-1>=0){
      current-=1;
      this.StackSmall +=1;
    }

    while(this.StackSmall-5>=0){
      this.StackSmall-=5
      this.StackSmallFills +=1;
    }
    while(this.StackMedium-5>=0){
      this.StackMedium-=5
      this.StackMediumFills +=1;
    }
    while(this.StackBig-5>=0){
      this.StackBig-=5
      this.StackBigFills +=1;
    }
  }

}
