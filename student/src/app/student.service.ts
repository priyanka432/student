import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  userData = [];
  // index: number;
  constructor() { }
  student(userData, index?) {
    console.log(userData);
    if (index != null)
    {
        this.userData[index] = userData;
    }
     else
    {
    this.userData.push(userData);
    }
  }
  getData() {
    return (this.userData);
  }
  deleteData(id)
  {
    this.userData.splice(id, 1);
  }
  editData(id)
  {
    return this.userData[id];
  }
  }






