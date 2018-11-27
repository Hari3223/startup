import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childfor',
  templateUrl: './childfor.component.html',
  styleUrls: ['./childfor.component.styl']
})
export class ChildforComponent{

selectedRadioValue:string ='All';

@Output()
countWhenButtonChanged:EventEmitter<string> = new EventEmitter<string>();

  @Input()
 all:number;
 @Input()
 male:number;
 @Input()
 female:number;
 
 onRadioButtonChange()
 {
  this.countWhenButtonChanged.emit(this.selectedRadioValue);
 }


}
