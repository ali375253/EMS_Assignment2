import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee_model/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  emp: Employee;
  index: number;
  qualification_list: string[];
  experience_list: string[];

  constructor(private activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
    this.index=parseInt(this.activatedRoute.snapshot.paramMap.get('index'));
    this.emp=this._employeeService.getEmployee(this.index);
  }

  ngOnInit() {
    this.qualification_list = ["10th", "12th", "Graduate", "Post Graduate"];
    this.experience_list = ["Fresher", "6 Months", "1 Year", "> 1 Year"];
    
  }

  toggleValue(lang: any): void {
    lang.isEnabled = !lang.isEnabled;
  }

  onSubmit(): void{
    this._employeeService.editEmployee(this.emp,this.index);
  }


}
