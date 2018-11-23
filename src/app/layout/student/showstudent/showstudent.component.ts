import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.scss']
})
export class ShowstudentComponent implements OnInit {
users = [];
data: any;
email = '';
fname = '';
  constructor(public router: Router, public HttpService: HttpService) { }

  ngOnInit() {
    this.showstudent();
  }
  showstudent() {
    this.HttpService.showstudent(this.email, this.fname).subscribe(
      data => {
        this.users = data['users'];
      }
    )
  }
  updatestudent(i){
    debugger;
    this.users[i].dob = new Date(this.users[i].dob);
    this.HttpService.updatestudent(this.users[i]).subscribe(
    data => {
      // this.users = data['users'];
    }
    )
  }

}
