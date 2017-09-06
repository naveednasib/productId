import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  employees:any[];
  constructor(){
    this.employees=[
      {  code:'emp021',name:'naveed',gender:'male',annualSalary:5025},
      {  code:'emp022',name:'iqbal',gender:'male',annualSalary:3000},
      {  code:'emp023',name:'zain',gender:'male',annualSalary:1500},
      {  code:'emp024',name:'amir',gender:'male',annualSalary:6000},
    ]
  }

  getmoreEmployee():void{
    this.employees=[
      {  code:'emp021',name:'naveed',gender:'male',annualSalary:5025},
      {  code:'emp022',name:'iqbal',gender:'male',annualSalary:3000},
      {  code:'emp023',name:'zain',gender:'male',annualSalary:1500},
      {  code:'emp024',name:'amir',gender:'male',annualSalary:6000},
      {  code:'emp025',name:'naveed',gender:'male',annualSalary:6000}
    ]
  }

  // trackbyEmpCode(index:number,employee:any) : string{
  //   return employee.code;
  // }


}
