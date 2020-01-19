import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private  emp: EmployeeService ) { }
  reg = this.fb.group({
      email: ['', Validators.required],
      pswd: ['', Validators.required]
  });
  ngOnInit() {
  }
 login() {
    console.log(this.reg.value);
    this.emp.reg(this.reg.value);
  }

}
