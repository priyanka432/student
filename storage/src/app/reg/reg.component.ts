import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  b: boolean;
  index: number;
  imageUrl: any = '';
  fileUpload: File = null;
  msg: string;
  public user = [];
  check: boolean;
  message: string;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService,
              private activatedRoute: ActivatedRoute) { }
  reg = this.formBuilder.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required],
    email: ['', Validators.required],
    pswd: ['', Validators.required],
    date: ['', Validators.required],
    address: ['', Validators.required],
    img: ['', Validators.required],
    country: ['', Validators.required],
    gender: ['', Validators.required],
  });
   login = this.formBuilder.group(
     {
       email: ['', Validators.required],
       pswd: ['', Validators.required]
     }
   );
  sign() {
    this.router.navigate(['../sign-in']);
  }
  onSubmit() {
    const p = this.userService.findex(this.index);
    const data = Object.assign({}, this.reg.value);
    data.img = this.imageUrl;
    console.log("p=" + p);
    if (p === undefined) {
      const a = this.user.findIndex(res => (res.email === this.reg.get('email').value) || (res.mobile === this.reg.get('mobile').value));
      if (a !== -1) {
        confirm('this Email id or phone no. already exist');
        this.router.navigateByUrl('reg');
      }
      else {
        this.userService.reg(data);
        this.router.navigateByUrl('list');
      }
    }
    else {
      this.userService.reg(data, this.index);
      this.router.navigateByUrl('list');
    }
  }
  ngOnInit() {
    this.user = this.userService.getData();
    this.activatedRoute.params.subscribe(params => {
      this.index = params['id']; // (+) converts string 'id' to a number
      const p = this.userService.editData(this.index);
      console.log(p);
      this.reg.patchValue(p ? p : {});
    });
  }

  imageget(event) {
    this.fileUpload = event.target.files[0];
    const filrre = new FileReader();
    console.log(filrre);
    filrre.readAsDataURL(this.fileUpload);
    filrre.onload = (res) => {
      console.log(res);
      this.imageUrl = res.target;
    };

  }

  signIn() {
    this.check = this.userService.login(this.login.value);
    if (this.check === true) {
      this.router.navigateByUrl('dashboard');
    }
    else {
      confirm('This Emial or Password are not exist');
    }
  }
}


