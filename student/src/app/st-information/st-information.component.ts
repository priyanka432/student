import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-st-information',
  templateUrl: './st-information.component.html',
  styleUrls: ['./st-information.component.scss']
})
export class StInformationComponent implements OnInit {
public index: number;
flag: boolean;
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router, 
    private activatedRoute: ActivatedRoute) { }
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
    if(this.flag)
    {
    this.studentService.student(this.student.value, this.index);
    }
    else{
      this.studentService.student(this.student.value);
    }
    this.router.navigateByUrl('list');
  }
  ngOnInit() {
    this.flag = false;
    this.activatedRoute.params.subscribe(params => {
    this.flag = true;
    this.index = params['id']; // (+) converts string 'id' to a number
    const p = this.studentService.editData(this.index);
    console.log(p);
    this.student.patchValue(p);
  });
  }
}