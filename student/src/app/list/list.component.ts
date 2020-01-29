import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
datas = [];
  constructor(private studentService: StudentService, private router: Router, private http: HttpClient) { }
  ngOnInit() {
   this.datas = this.studentService.getData();
   console.log(this.datas);
  }
  add()
  {
    this.router.navigateByUrl('st-information');
  }
  delete(index)
  {
   const a = confirm('Are you sure you want to permanently delete ? ');
   if (a === true)
    {
    this.studentService.deleteData(index);
    }
  }
 edit(index) {
    this.studentService.editData( index);
    this.router.navigate(['/edit-user', index]);
  }
}


