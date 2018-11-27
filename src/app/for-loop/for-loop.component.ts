import { Component,OnInit} from '@angular/core';
import {IEmployee} from './for-loop.EmployeeInterface';
import {EmployeeService} from './for-loop.EmployeeService';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  //styleUrls: ['./for-loop.component.styl'],
  providers:[EmployeeService]
})
export class ForLoopComponent implements OnInit {

  selectedRadioButtonValue:string='All'
  employees : IEmployee[];
  //=
  /*[
  //employees : IEmployee[];
     
    {Name : 'Raj',Salary:'10000',Gender:'Male'},
    {Name : 'Mahesh',Salary:'20000',Gender:'Male'},
    {Name : 'A',Salary:'30000',Gender:'FeMale'},
    {Name : 'B',Salary:'30000',Gender:'FeMale'},  
  
  ]*/
constructor(private _employeeService :EmployeeService)
{
  //this.employees = 
 
 
}

ngOnInit(){

  // this.employees=this._employeeService.getEmployeesList()
  
  this._employeeService.getEmployees().subscribe((response)=>{
    console.log(response);
     this.employees = response;
  })
}

  onEmployeeRadoChange(selectedvalue:string):void{
 
      this.selectedRadioButtonValue=selectedvalue;
    
  }

  totalCount():number{
    if(this.employees)
    return this.employees.length;
  }

  maleTotalCount():number{
    if(this.employees)
    return this.employees.filter(k => k.Gender === 'Male').length;
  }

  femaleTotalCount():number{
    if(this.employees)
    return this.employees.filter(k => k.Gender === 'FeMale').length;
  }

}
