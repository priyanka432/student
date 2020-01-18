import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  reg = this.fb.group(
    {
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      pswd: ['', Validators.required],
      date: ['', Validators.required],
      addr: ['', Validators.required],
      image: ['', Validators.required],
     // gender: ['', Validators.required],
      country: ['', Validators.required]
    }
  )

  ngOnInit() {
  }

}
