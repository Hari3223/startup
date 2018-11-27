import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../for-loop/for-loop.EmployeeService'
import { IEmployee } from '../for-loop/for-loop.EmployeeInterface';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.styl'],
  providers:[EmployeeService]
})
export class ViewEmployeeComponent implements OnInit {
 optionalId: number;
 empData: IEmployee;

  constructor(private _routerActive: ActivatedRoute, private emp: EmployeeService) { }

  ngOnInit() {
 this.optionalId=this._routerActive.snapshot.params['id'];
 
  this.emp.getEmployeebyId(this.optionalId).subscribe((emps)=>{
  
 this.empData =emps;
 window.scroll(0,0);
    })

  }

}
