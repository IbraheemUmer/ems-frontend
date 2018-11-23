import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {
  users = [];
  constructor(public router: Router, public HttpService: HttpService) { }

  ngOnInit() {
    this.HttpService.showdata().subscribe(
      data => {
        this.users = data['users'];
        }, 
        error => {
        }
      )
  }

}
