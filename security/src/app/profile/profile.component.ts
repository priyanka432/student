import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
data = [];
  constructor(private emp: EmployeeService ) { }

  ngOnInit() {
    this.data = this.emp.getData();
    console.log(this.data);
  }

}
