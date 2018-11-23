import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
user={
    full_name: "",
    password: "",
}
    constructor(public router: Router, public HttpService: HttpService) {}
    
     

    ngOnInit() {}

    onLoggedin() {
        this.HttpService.userlogin(this.user).subscribe(
        data => {
            alert('successful login');
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
          }, 
          error => {
              alert(error.error.message);
          }
        )

    }
}
