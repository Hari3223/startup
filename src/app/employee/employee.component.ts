import { Component } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.styl']
})
export class EmployeeComponent  {

 

  userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];

 

}
