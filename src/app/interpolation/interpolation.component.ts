import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showinterpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  noni:string="noni";
  firstname:string="naveed ";
  lastname:string="nasib "

  getName():string{
    return this.firstname+''+this.lastname;
  }
  onClick():void{
   console.log("here");
 }
}
