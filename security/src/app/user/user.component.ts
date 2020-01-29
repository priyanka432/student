import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   public users = [];
  constructor(private emp: EmployeeService, private router: Router) { }
  ngOnInit() {
    this.users = this.emp.getData();
  }
  deleteUser(index)
  {
    this.emp.del(index);
}
  editUser(index) {
    this.emp.edit(index);
    this.router.navigate(['/edit-user', index]);
      }
    }
     /*edit(user): void {
        window.localStorage.removeItem(res => (res.name));
        window.localStorage.setItem("editUserName", user.name.toString());
        this.router.navigate(['register']);
      };*/
