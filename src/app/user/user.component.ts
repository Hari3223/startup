import { Component} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.styl']
})



export class UserComponent  {

  name : string = "Seshu"
  showButton : boolean = true;

  FirstName : string = "Nagabhushana"
  LastName  : string = "Reddy"
  Salary    : number = 10000
  Gender    : string = "Male"

  hideOrShow():void
  {
     this.showButton = !this.showButton;
  }
}
