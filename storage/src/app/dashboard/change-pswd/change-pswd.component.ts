import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-pswd',
  templateUrl: './change-pswd.component.html',
  styleUrls: ['./change-pswd.component.scss']
})
export class ChangePswdComponent implements OnInit {
 public user = [];
 msg: string;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  change = this.formBuilder.group({
    // oldPswd: ['', Validators.required],
    newPswd: ['', Validators.required],
    confirmPswd: ['', Validators.required],
  });
  ngOnInit() {
   this.user = this.userService.getData();
  }
  chang(oldPswd)
  {
     this.userService.change(this.change.value, oldPswd );
     if (this.change.get('newPswd').value !== this.change.get('confirmPswd').value)
     {
      this.msg = 'New Password or Confirm Password are not equal';
     }
  }

}
