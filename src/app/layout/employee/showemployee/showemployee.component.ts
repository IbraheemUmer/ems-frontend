import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.scss']
})
export class ShowemployeeComponent implements OnInit {

  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy',
    defaultOpen: false
}
  users = [];
  data: any;
  fullname = '';
  salary = '';
  email = '';
  constructor(public router: Router, public HttpService: HttpService) { }

  ngOnInit() {
    this.showemployee();
  }

  showemployee() {
    this.HttpService.showemployee(this.email,this.fullname, this.salary).subscribe(
      data => {
        this.users = data['users'];
      }
    )
  }
  updateemployee(i){
    debugger;
    this.users[i].hire_date = new Date(this.users[i].hire_date);
    this.HttpService.updateemployee(this.users[i]).subscribe(
    data => {
      alert('successfully updated');
    }, 
    err => {
      alert('No change');
    }
     ) }
  
  destroyemployee(i){
    this.HttpService.destroyemployee(this.users[i]).subscribe(
      data => {
        alert('successfully deleted');
      }, 
      err => {
        alert('Can not delete');
      }
    )
  } 

}
