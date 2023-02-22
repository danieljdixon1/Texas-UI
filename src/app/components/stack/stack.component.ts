import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit{
  @Input() color: number =0;
  @Input() size: number =15;

  // @Input() seed: number =534543;

  path: string = "";
  private IMAGEASSETBASEPATH: string = "assets/Chips/";

  ngOnInit(): void {
    this.path = this.getColor();
  }

  getColor(){
    let result="";
    switch (this.color){
      case 0: result = "black" ;break;
      case 1: result = "red" ;break;
      case 2: result = "blue" ;break;
    }
    return this.IMAGEASSETBASEPATH + result + ".svg"
  }

  getStyleObject(i: number){
    //TODO make stacks irregular with random noise function
    // 'left': this.randomNoise(i)*100,
    return {
      'z-index': i
    }
  }
  // randomNoise(i: number): number {
  //   return ((this.seed+i) * 9301 + 49297) % 233280 / 233280;
  // }
}
