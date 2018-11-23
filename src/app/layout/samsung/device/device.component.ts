import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
users = []
  constructor(public router: Router, public HttpService: HttpService) { }

  ngOnInit() {
    this.HttpService.device().subscribe(
      data => {
        this.users = data['users'];
        }, 
        error => {
        }
      )
  }

}
