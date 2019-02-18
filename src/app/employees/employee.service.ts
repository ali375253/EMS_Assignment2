import { Injectable } from '@angular/core';
import { Employee } from './employee_model/employee.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employeelist: Employee[]=[];
  constructor(private _route: Router) {
  }

  addEmployee(emp: Employee): void {
    if(this.employeelist.length === 0){
      emp.id=1;
    }
    else{
      emp.id=this.employeelist[this.employeelist.length-1].id +1;
    }
    this.employeelist.push(emp);
  }

  getEmployeeList(): Employee[]{
    return this.employeelist;
  }

  getEmployee(index: number): Employee{
    return this.employeelist[index];
  }

  editEmployee(emp: Employee, index: number): void {
    
    this._route.navigate(['/employeelist']);
  }

  deleteEmployee(emp: Employee): void {
    let index=this.employeelist.indexOf(emp);
    if(index >= 0){
      this.employeelist.splice(index,1);
    }
    else{
      alert("Employee not found");
    }
  }
}
