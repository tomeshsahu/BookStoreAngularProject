import { Injectable } from '@angular/core';
import { HttpdataService } from '../HttpServices/httpdata.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistdataService {

  token: any;
  constructor(private httpServices:HttpdataService) { 
  this.token = localStorage.getItem('token');
}

getwishdata()
{
  console.log(this.token);
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  
  return this.httpServices.getService('/Controller/GetWishlistByUserid', true, headers);
}

removerlist(WishListId:any)
{
  console.log(WishListId);

  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.deleteService(`/Controller/DeleteWishList/${WishListId}`, true, headers);


}

}


