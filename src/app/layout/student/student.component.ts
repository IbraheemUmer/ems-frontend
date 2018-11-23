import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
  Student={
    email: "",
    password: "",
    fname: "",
    lname: "",
    dob: 0,
    phone: 0,
    age: 0,
  }
  constructor(private data: HttpService) { }
  createStudent(){
    debugger;
    this.data.createStudent(this.Student).subscribe(
      data => {
        debugger;
        console.log(data)
  }
    )
} }

