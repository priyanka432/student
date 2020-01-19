import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }
  reg = this.fb.group(
    {
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      pswd: ['', Validators.required],
      date: ['', Validators.required],
      addr: ['', Validators.required],
      image: ['', Validators.required],
      country: ['', Validators.required]
    }
  );
  onSubmit() {
    console.log(this.reg.value);
    this.employeeService.reg(this.reg.value);
    // this.list();
  }
  /*list() {
    this.router.navigateByUrl('list');
  }*/

  ngOnInit() {
  }

}
