import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { HttpService } from '../http.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
user={
    full_name: "",
    email: "",
    password: "",
    RepeatPassword: "",
    gender: "",
    address: "",
    salary: "",
    phone_no: "",
    cnic: "",
}


    constructor(public HttpService: HttpService) {}

    ngOnInit() {}

register() {
    this.HttpService.register(this.user).subscribe(
    data => {
        alert('successful login');
      },
      error => {
          alert(error.error.message);
      }
    )
    } }