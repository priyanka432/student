import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']

})
export class ListComponent implements OnInit {
 public data = [];
 // t:Boolean;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.data = this.userService.getData();
    console.log(this.data);
  }
  join()
  {
    this.router.navigate(['./reg']);
  }
  delete(index)
  {
    const t = confirm('Are you sure you want to permanently delete “data”?');
    if (t === true)
    {
    this.userService.deleteData(index);
    }
  }
  edit(index)
  {
    this.userService.editData(index);
    this.router.navigate(['/edit', index]);
  }

}
