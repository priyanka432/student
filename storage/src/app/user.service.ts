import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData = [];
  public user = [];
  fvalue = [];
  trash = [];
  // changePassword = [];
  images = [];
  share = [];
  i: number;
  constructor(private router: Router) { }
  reg(userData, index?) {
    if (index !== undefined) {
      this.userData[index] = userData;
    }
    else {
      this.userData.push(userData);
    }
  }
  getData() {
    return this.userData;
  }
  deleteData(index) {
    this.userData.splice(index, 1);
  }
  editData(index) {
    return this.userData[index];
  }
  findex(index) {

    return index;
  }
  /*login(email, pswd)
  {
    const findex = this.userData.findIndex(res => (res.email === email ) && (res.pswd === pswd));
    if (findex !== -1)
    {
     return true;
    }
    else{
         return false;
    }
  }*/
  login(signIn) {
    const a = this.userData.find(res => (res.email === signIn.email) && (res.pswd === signIn.pswd));
    const findex = this.userData.findIndex(res => (res.email === signIn.email) && (res.pswd === signIn.pswd));
    for (this.i = 0; this.i < this.fvalue.length; this.i++) {
      this.fvalue.pop();
    }
    if (findex !== -1) {
      this.fvalue.push(a);
      return true;
    }
    else {
      return false;
    }
  }
  profile() {
    console.log('user service fvalue=' + this.fvalue);
    return this.fvalue;
  }
  change(changePassword) {
    const checkEmail = this.fvalue.find(res => res.email);
    const isExist = this.userData.find(res => (res.pswd === changePassword.oldPswd) && (res.email === checkEmail.email));
    if (isExist) {
      if (changePassword.newPswd === changePassword.confirmPswd) {
      isExist.pswd = changePassword.newPswd;
      alert('password is successfully Changed ');
      }
    } 
    console.log(this.userData);

  }
  addImage(images)
  {
    this.images.push(images);
  }
  getImages()
  {
    console.log(this.images);
    return this.images;
  }
  deleteImage(index)
  {
    this.trash.push(this.images[index]);
    this.images.splice(index, 1);
  }
  getTrash()
  {
   // console.log('trash=' + this.trash)
    return this.trash;
  }
  deleteTrash(index)
  {
    this.trash.splice(index, 1);
  }
  restoreData(index)
  {
   this.images.push(this.trash[index]);
   this.trash.splice(index, 1);
  }
  shareData(index)
  {
   this.share.push(this.images[index]);
   // console.log('share'+this.share)
  }
  getShareData()
  {
    return this.share;
  }
 cancelShareData(index)
  {
    this.share.splice(index, 1);
  }
  shareIndex(index)
  {
    return index;
  }

}
