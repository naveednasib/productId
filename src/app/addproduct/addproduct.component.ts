import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent  {

  prices: string  = 'Tom';
  cycle: string  = '2';
  addon: string  = '1';
  page: string  = '3';
  affiliate: string  = '2158';  
  country: string  = 'pakistan';

    elementStatus:boolean = false;

    toggle_detail() :void{
      this.elementStatus = !this.elementStatus;    
     
    }


}
