import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
flag: boolean;
index: number;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService,
     private router: Router, private activatedRoute: ActivatedRoute) { }
  reg = this.fb.group(
    {
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      pswd: ['', Validators.required],
      date: ['', Validators.required],
      addr: ['', Validators.required],
      image: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required]
    }
  );
  onSubmit() {
    console.log(this.reg.value);
    if (!this.flag) {
    this.employeeService.reg(this.reg.value);
    } else {
      this.employeeService.reg(this.reg.value, this.index);
    }
    this.router.navigateByUrl('login');
  }
  ngOnInit() {
    this.flag = false;
    this.activatedRoute.params.subscribe(params => {
    this.flag = true;
    this.index = params['id']; // (+) converts string 'id' to a number
    const p = this.employeeService.edit(this.index);
    console.log(p);
    this.reg.patchValue(p);

      // In a real app: dispatch action to load the details here.
   });
  }
}
