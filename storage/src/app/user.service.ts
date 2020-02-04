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
changePassword = [];
i: number;
  constructor(private router: Router) { }
  reg(userData, index?)
  {
    if (index !== undefined)
    {
      this.userData[index] = userData;
    }
    else
    {
        this.userData.push(userData);
    }
  }
  getData()
  {
    return this.userData;
  }
  deleteData(index)
  {
    this.userData.splice(index, 1);
  }
  editData(index)
  {
    return this.userData[index];
  }
  findex(index)
  {
    
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
  login(email, pswd)
  {
     const a = this.userData.find(res => (res.email === email ) && (res.pswd === pswd));
     const findex = this.userData.findIndex(res => (res.email === email ) && (res.pswd === pswd));
     for (this.i = 0; this.i < this.fvalue.length; this.i++)
     {
     this.fvalue.pop();
     }
     if (findex !== -1)
    {
    this.fvalue.push(a);
    return true;
    }
    else{
         return false;
    }
  }
  profile()
  {
   console.log('user service fvalue=' + this.fvalue);
   return this.fvalue;
  }
  change(changePassword, oldPswd)
  {
    this.changePassword.push(changePassword);
    const useDataIndex = this.userData.find(res => (res.pswd ));
    console.log('pswd' + useDataIndex);
    const userDataIndex = this.userData.findIndex(res => (res.pswd === oldPswd));
    const change = this.changePassword.findIndex(res => (res.newPswd === res.confirmPswd));
    if (userDataIndex !== -1)
    {
      if (change !== -1)
      {
        console.log('userDataIndex=' + userDataIndex);
        this.userData[userDataIndex].pswd = changePassword.newPswd;
      }
    }
  }
  
}
