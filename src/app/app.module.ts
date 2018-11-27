import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
//import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ForminputsComponent } from './forminputs/forminputs.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import {EmployeePipe} from './for-loop/for-loop.pipe'
//import { pipe } from '@angular/core/src/render3';
import { ChildforComponent } from './childfor/childfor.component';
import { HttpModule } from '@angular/http';
import { RoutingexampleComponent } from './routingexample/routingexample.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewEmployeeComponent } from './other/view-employee.component';
//import {EmployeeService} from './for-loop/for-loop.EmployeeService';

const appRoutes:Routes=[
  { path: 'home', component: EmployeeComponent },
    { path: 'routing', component: RoutingexampleComponent },
    { path: 'user', component: UserComponent },
    {path: 'viewemp',component: ViewEmployeeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent },
 

];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    ForminputsComponent,
    ForLoopComponent,
    EmployeePipe,
    ChildforComponent,
    RoutingexampleComponent,
    NotfoundComponent,
    ViewEmployeeComponent
    //EmployeeService
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
