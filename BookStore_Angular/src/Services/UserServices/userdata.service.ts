import { Injectable } from '@angular/core';
import { HttpdataService } from '../HttpServices/httpdata.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpServices:HttpdataService) { }


  registration(reqdata: any){
    console.log(reqdata);
  
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postService('/User/Registration',reqdata,false,header)
  }

  login(reqdata:any)
  {
    console.log(reqdata);
    console.log("login");
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postService('/User/UserLogin',reqdata,false,header)
  }

  forgetpassword(reqdata:any)
  {
    console.log(reqdata);
    console.log("forget");
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postService(`/User/ForgetPasswordUser/${reqdata.email}`, reqdata,false,header);
  }

  reset(reqdata:any)
  {
    console.log(reqdata);
    let header={
      Headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

      return this.httpServices.putServices('/User/ResetPassword',reqdata,false,header);
    }
 



  }
  


