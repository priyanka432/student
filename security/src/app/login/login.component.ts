import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  datas = [];
  userInfo: any;
  constructor(private fb: FormBuilder, private  emp: EmployeeService, private router: Router) { }
  reg = this.fb.group({
      email: ['', Validators.required],
      pswd: ['', Validators.required]
  });
  ngOnInit() {
    this.datas = this.emp.getData();
    console.log(this.datas);
  }
  login() {
    if (this.datas.length) {
      const uIdx = this.datas.findIndex(user => (user.email === this.reg.get('email').value) && 
      (user.pswd === this.reg.get('pswd').value) );
      if (uIdx !== -1) {
        this.userInfo = this.datas[uIdx];
        this.router.navigateByUrl('profile');
      }
    }
  }

}
