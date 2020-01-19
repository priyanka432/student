import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  userData = [];
  constructor(private http: HttpClient) { }
  reg(userData) {
    console.log(userData);
    this.userData.push(userData);
  }
  getData() {
    return (this.userData);
  }
}
