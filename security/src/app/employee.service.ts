import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  userData = [];
  id = 0;
  constructor(private http: HttpClient) { }

  reg(user, index?) {
    console.log(user);
    if (index != null) {
    this.userData[index] = user;
    } else {
      this.userData.push(user);
    }
  }
  getData() {
    return (this.userData);
  }
  del(id) {
    return this.userData.splice(id, 1);
  }
  edit(index)
  {
    return this.userData[index];
  }
}
