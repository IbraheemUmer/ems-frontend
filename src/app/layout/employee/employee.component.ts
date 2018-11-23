import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy',
      defaultOpen: false
  }
  Employee={
    fullname: "",
    email: "",
    cnic: "",
    gender: "",
    phone_no: 0,
    hire_date: new Date(),
    job_id: 0,
    salary: 0,
  }
  constructor(private data: HttpService) { }
  createEmployee(){
    debugger;
    this.data.createEmployee(this.Employee).subscribe(
      data => {
        debugger;
        alert('successfully created');
      }, 
      err => {
        alert('null');
      }
    )
}
}
