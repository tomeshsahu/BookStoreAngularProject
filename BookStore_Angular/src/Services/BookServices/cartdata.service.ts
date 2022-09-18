import { Injectable } from '@angular/core';
import { HttpdataService } from '../HttpServices/httpdata.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  token: any;
  constructor(private httpServices:HttpdataService) { 
  this.token = localStorage.getItem('token');
}


getallbook()
{
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  
  return this.httpServices.getService('/Book/GetAllBooks', true, headers);
}

bookidbyid(BookId:any)
{
  console.log(BookId);
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.getService(`/Book/GetBookById/${BookId}`,true,headers); 
}

addtocart(reqdata:any)
{
  console.log("add t cart data",reqdata);
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  console.log("tomesh",reqdata);
  return this.httpServices.postService('/Controller/AddToCart/',reqdata,true,headers); 
  
}

addtowishlist(BookId:any)
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
    console.log("add wishlist",BookId);
    return this.httpServices.postService(`/Controller/AddToWishList/${BookId}`,BookId,true,headers);
  }

  addFeadback(reqdata:any)
  {
    let headers={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
      console.log("Add FeedBack");
      return this.httpServices.postService('/Controller/AddFeedBack',reqdata,true,headers);
  }




  getfeedBack(bookId:any)
  {
    let headers={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
      console.log("Get FeedBack");
      return this.httpServices.getService(`/Controller/GetAllFeedback/${bookId}`,true,headers);
  }





}



