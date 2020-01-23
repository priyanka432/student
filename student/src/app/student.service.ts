import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  userData = [];
  url = 'http://localhost:3000/set';
  constructor(private http: HttpClient) { }
  student(userData) {
    console.log(userData);
    this.userData.push(userData);
  }
  getData() {
    return (this.userData);
  }
  deleteData(id)
  {
    this.userData.splice(id, 1);
  }
  editData(userData):Observable<any>
  {
    return this.http
    .put(this.url, userData);
  }
  }






