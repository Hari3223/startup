import { Injectable } from "@angular/core";
import{IEmployee} from './for-loop.EmployeeInterface';
import {Http,Response} from "@angular/http";
import { Observable} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Options } from "selenium-webdriver/ie";
import { Resolve } from "@angular/router";


@Injectable()
export class EmployeeService{

    constructor(private _http: Http) { }

    // Notice the method return type is Observable<IEmployee[]>
    getEmployees(): Observable<IEmployee[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:3000/EmployeesData')
        .pipe(
            map((response: Response) =>{
             //   console.log(response.json())
                return  <IEmployee[]>response.json()
            }
            )
        )
            
    }

    getEmployeebyId(Id):Observable<IEmployee>{
    return this._http.get('http://localhost:3000/EmployeesData/'+Id).pipe(
         map((response: Response)=> {
           //  console.log(response.json());
             return <IEmployee>response.json();
         })
     )
    }
    

    getEmployeesList():IEmployee[]{
        return[


    {Name : 'Raj',Salary:'10000',Gender:'Male'},
    {Name : 'Mahesh',Salary:'20000',Gender:'Male'},
    {Name : 'A',Salary:'30000',Gender:'FeMale'},
    {Name : 'B',Salary:'30000',Gender:'FeMale'}


        ];
    }

}