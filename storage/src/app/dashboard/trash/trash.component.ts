import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public trash = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.trash = this.userService.getTrash();
  }
  delete(index)
  {
    const a = confirm('Are you sure you want to permanently delete “image”?');
    if( a === true)
    {
      this.userService.deleteTrash(index);
    }
  }
  restore(index)
  {
    this.userService.restoreData(index);
  }

}
