import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-onceagain',
  templateUrl: './onceagain.component.html',
  styleUrls: ['./onceagain.component.scss']
})
export class OnceagainComponent implements OnInit {
users = []
  constructor(public router: Router, public HttpService: HttpService) { }

  ngOnInit() {
    this.HttpService.onceagain().subscribe(
      data => {
        this.users = data['users'];
        }, 
        error => {
        }
      )
  }



}
