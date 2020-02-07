import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  profile()
  {
   this.router.navigateByUrl('dashboard/profile');
  }
  change()
  {
    this.router.navigateByUrl('dashboard/changePswd');
  }
  document()
  {
    this.router.navigateByUrl('dashboard/document');
  }
  trash()
  {
    this.router.navigateByUrl('dashboard/trash');
  }
  home()
  {
    this.router.navigateByUrl('dashboard/home');

  }


}
