import { Injectable } from '@angular/core';
import { HttpdataService } from '../HttpServices/httpdata.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookcartdataService {
  token: any;
  constructor(private httpServices:HttpdataService) { 
  this.token = localStorage.getItem('token');

}
getallcart()
{
  console.log(this.token);
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  
  return this.httpServices.getService('/Controller/GetAllBooksCart', true, headers);
}

deletecart(CartId:any)
{
    console.log(CartId);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    
    return this.httpServices.deleteService(`/Controller/DeleteCart/${CartId}`, true, headers);
  }


gAddress()
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.getService('/Controller/GetAllAddress',true,headers);
}


UserAddress()
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.getService('/User/GetUser',true,headers);
}

Addressvalue(AddressId:any)
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.getService(`/Controller/GetAddress/${AddressId}`,true,headers);
}



Checkoutdata(readata:any)
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.postService('/Controller/AddOrder',readata,true,headers);
}


//----------Update Quntity----------//
addUpdateCart(CartId:any,reqdata:any)
{
console.log("ID",CartId,"ReqData",reqdata);

let headers={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': "Bearer " + this.token
  })
}
return this.httpServices.putServices(`/Controller/UpdateCart/${CartId}`,reqdata,true,headers);

}


}


