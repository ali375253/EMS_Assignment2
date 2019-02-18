import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee_model/employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employeeList: Employee[];
  languages: string[]=[];
  constructor(private _employeeService: EmployeeService, private activatedRouter: ActivatedRoute, private _route: Router ) {
  }

  ngOnInit() {
    this.employeeList=this._employeeService.getEmployeeList();
    //alert(this._employeeService.getEmployeeList().length);
    for(let i=0;i<this.employeeList.length;i++){
      let employee_languages: string="";
      for(let j=0;j<this.employeeList[i].languages.length;j++){
        if(this.employeeList[i].languages[j].isEnabled === true){
          employee_languages = employee_languages + " " + this.employeeList[i].languages[j].name;
        }
      }
      this.languages[i]=employee_languages;
    }
  }

  addEmployeeDetails(): void {
    this._route.navigate(['/addemployee']);
  }

  editEmployeeDetails(empId: number): void {
    this._route.navigate(['/editemployee',empId]);
  }

  deleteEmployeeDetails(emp: Employee): void {
    if(confirm("Are you sure?")){
      this._employeeService.deleteEmployee(emp);
    }
  }

}
