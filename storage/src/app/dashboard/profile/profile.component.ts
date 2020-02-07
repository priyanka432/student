import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public user = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.profile();
    console.log('profile=' + this.user);
    // var id = this.user.findIndex(res => res)
  }
}
