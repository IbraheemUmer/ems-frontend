import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.scss']
})
export class ShowuserComponent implements OnInit {
users = [];

  constructor(public router: Router, public HttpService: HttpService) { }

  ngOnInit() {
    this.HttpService.showuser().subscribe(
      data => {
        this.users = data['users'];
        }, 
        error => {
        }
      )
  }


}
