import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'employeepipe'
})

export class EmployeePipe implements PipeTransform{
    transform(value:string,gender:string):string{
        if(gender.toLowerCase()=='male')
        return 'Mr. '+value;
        else{
            return 'Miss. '+value;
        }
    }
}