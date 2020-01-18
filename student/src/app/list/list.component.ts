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
  constructor(private st: StudentService, private router: Router, private http: HttpClient) { }
  ngOnInit() {
   this.datas = this.st.getData();
   console.log(this.datas);
  }
  add()
  {
    this.router.navigateByUrl('st-information');
  }
  delete()
  {
   this.st.popData();
  }
 edit() {
    // Update item by taking id and updated data object
    this.st.editData( this.datas).subscribe(response => {
      this.router.navigate(['st-information']);
    })
  }
}


