import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
// import {ActivateRoute } from '@angular/router';

@Component({
  selector: 'app-st-information',
  templateUrl: './st-information.component.html',
  styleUrls: ['./st-information.component.scss']
})
export class StInformationComponent implements OnInit {

  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }
  public st = ['5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
  student = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    mobile: ['', Validators.required],
    class: ['', Validators.required]
  }
  );
  onSubmit() {
    console.log(this.student.value);
    this.studentService.student(this.student.value);
    this.list();
  }
  list() {
    this.router.navigateByUrl('list');
  }

  ngOnInit() {
  }

}
