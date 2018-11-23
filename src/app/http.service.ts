import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  userlogin(params) {
    return this.http.post('http://localhost:1337/login/userlogin', params);
  }
  register(params) {
    return this.http.post('http://localhost:1337/register/register', params);
  }
  showuser() {
    return this.http.get('http://localhost:1337/user/showUser');
  }
  showdata(){
    return this.http.get('http://localhost:1337/car/showdata');
  }
  onceagain(){
    return this.http.get('http://localhost:1337/Task1/onceagain');
  }
  device(){
    return this.http.get('http://localhost:1337/department/device');
  }
  showemployee(email, fullname, salary){
    return this.http.get('http://localhost:1337/employee/showemployee?email=' + email + '&fullname=' + fullname + '&salary=' + salary );
  }

  createEmployee(params){
    debugger
    return this.http.post('http://localhost:1337/employee/createEmployee', params);
  }
  createStudent(params){
    debugger
    return this.http.post('http://localhost:1337/student/createStudent', params);
  }
  showstudent(email, fname){
    return this.http.get('http://localhost:1337/student/showstudent?email=' + email + '&fname=' + fname );
  }
  updatestudent(user){
    debugger
    return this.http.post('http://localhost:1337/student/updatestudent', user);
  }
  updateemployee(user){
    debugger
    return this.http.post('http://localhost:1337/employee/updateemployee', user);
  }
  destroyemployee(user){
    debugger
    return this.http.post('http://localhost:1337/employee/destroyemployee', user);
  }
}
