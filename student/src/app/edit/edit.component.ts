import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
public data = [];
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }
  /*student = this.fb.group({
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
  }*/
  ngOnInit() {
    this.data = this.studentService.getData();
  }
}

