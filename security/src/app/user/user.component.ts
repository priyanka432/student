import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   public users = [];
  constructor(private emp: EmployeeService) { }

  ngOnInit() {
    this.users = this.emp.getData();
  }
  delt()
  {
    this.emp.del();
  }

}
