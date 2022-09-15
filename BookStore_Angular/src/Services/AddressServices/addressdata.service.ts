import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpdataService } from '../HttpServices/httpdata.service';

@Injectable({
  providedIn: 'root'
})
export class AddressdataService {

  token: any;
  constructor(private httpServices:HttpdataService) { 
  this.token = localStorage.getItem('token');
}

// address(reqdata:any){
//   console.log(reqdata);

//   let header = {
//     headers: new HttpHeaders({
//       'Content-type': 'application/json',
//       'Authorization': "Bearer " + this.token
//     })
//   }
//   return this.httpServices.postService('/Controller/AddAddress',reqdata,true,header)
// }



addresspost(reqdata:any)
{
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " +this.token
    })
  }
  console.log("tomesh",reqdata);
  return this.httpServices.postService('/Controller/AddAddress',reqdata,true,headers);  
}



getOrder()
{
let headers={
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Authorization':"Bearer "+this.token
  })
}
return this.httpServices.getService('/Controller/GetAllOrder',true,headers);
}




}
