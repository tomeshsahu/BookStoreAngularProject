import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from 'src/Services/BookServices/cartdata.service';


@Component({
  selector: 'app-getbookbyid',
  templateUrl: './getbookbyid.component.html',
  styleUrls: ['./getbookbyid.component.scss']
})
export class GetbookbyidComponent implements OnInit {
getbook:any;
Book:any;
  constructor(private book:CartdataService,private route:Router) { }
  ngOnInit(): void {
    this.Book=localStorage.getItem('bookid')
    console.log(this.Book);
    this.getbookid();
    
  }
  getbookid()
  {
    this.book.bookidbyid(this.Book).subscribe((Request:any)=>
    {
      console.log(Request);
      console.log(Request.data);
      this.getbook=Request.data;
      console.log(this.getbook);
   
    })  
  }

  AddToCart(data:any)
  {
    console.log("data=",data.bookId);
    let reqdata={
      BookId:data.bookId,
      BookQuantity:1,
    }
    console.log(reqdata);

    this.book.addtocart(reqdata).subscribe((Request:any)=>{
      console.log(Request);
      this.route.navigateByUrl('dashboard/getallcart')
    })
  }

  WishList(data:any)
  {
    console.log(data.bookId);
    this.book.addtowishlist(data.bookId).subscribe((Request:any)=>
    {
      console.log(Request);
      this.route.navigateByUrl('dashboard/getwishlist')
    })
  }

  


   
  }

