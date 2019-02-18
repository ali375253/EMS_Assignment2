
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from "./employees/add_employee/addEmployee.component";
import { FormsModule } from "@angular/forms";
import { EmployeelistComponent } from './employees/employee_list/employeelist.component';
import { EmployeeService } from './employees/employee.service';
import { RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './employees/edit_employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeelistComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'', pathMatch:'full',redirectTo:'employeelist'},
      { path:'employeelist', component: EmployeelistComponent},
      { path:'addemployee', component: AddEmployeeComponent },
      { path:'editemployee/:index', component: EditEmployeeComponent }
    ])
  ],
  
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
