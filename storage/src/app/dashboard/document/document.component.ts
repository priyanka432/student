import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  imageUrl: any = '';
  fileUpload: File = null;
  index: number;
  image = [];
 check = 0 ;
 shareIndex: number;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.image = this.userService.getImages();
    console.log('this.images=' + this.image);
   }
  images = this.formBuilder.group({
    img: ['', Validators.required]

  });
  add()
  {
    const data = Object.assign({}, this.images.value);
    data.img = this.imageUrl;

    this.userService.addImage(data);

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
  ngOnInit() {
    //serviceIndex = this.userService

  }
  delete(index)
  {
    const a = confirm('Move to trash');
    if(a === true)
    {
    this.userService.deleteImage(index);
    }
  }
  share(index)
  {
    this.check = 1;
    this.shareIndex = this.userService.shareIndex(index);
    this.userService.shareData(index);
  }
  shareCancel(index)
  {
    this.check = 0;
    this.shareIndex = this.userService.shareIndex(index);
    this.userService.cancelShareData(index);
  }
}
