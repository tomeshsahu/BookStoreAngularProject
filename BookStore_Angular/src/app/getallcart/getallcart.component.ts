import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookcartdataService } from 'src/Services/CartServices/bookcartdata.service';

@Component({
  selector: 'app-getallcart',
  templateUrl: './getallcart.component.html',
  styleUrls: ['./getallcart.component.scss']
})
export class GetallcartComponent implements OnInit {


  addressArray:any;
  getallcartbooks:any;
  constructor(private getcart:BookcartdataService,private snackbar:MatSnackBar,private route:Router) { }
  allcart:any;
  ngOnInit(): void {
  this.getaddress();
  this.userdata();
  this.getallcart();
}

CardId:any;
adqnt:any;
addQnt(data:any)
{
  this.adqnt=data.bookQuantity;
  this.adqnt=this.adqnt+1;
  data.bookQuantity=this.adqnt;

  if(this.adqnt<=0)
  {
    console.log("this statement is wrong");
  }
  else
  { 
    this.CardId=data.cartId;

     let Data={
    BookQuantity:this.adqnt,
    BookId:data.bookId,
  }
    console.log(Data);
    console.log(this.CardId);    
  
   this.getcart.addUpdateCart(this.CardId,Data).subscribe((Request:any)=>{
     console.log(Request);
  })
}
}


qnt:any;
lessQnt(data:any)
{
  this.qnt=data.bookQuantity;
  this.qnt--;
  data.bookQuantity=this.qnt;

  console.log(data.cartId,data.bookId,this.qnt);
  if(this.qnt<=0)
  {
    data.bookQuantity=0;
  }
  else
  {
    console.log(this.qnt);
    console.log("this statement is write");

    this.CardId=data.cartId;

    let Data={
   BookQuantity:this.adqnt,
   BookId:data.bookId,
 }
   console.log(Data);
   console.log(this.CardId);    
 
  this.getcart.addUpdateCart(this.CardId,Data).subscribe((Request:any)=>{
    console.log(Request);
 })

  }
}

  getallcart()
  {
    this.getcart.getallcart().subscribe((Request:any)=>
    {
      console.log("Tomeshwar Called");
      console.log(Request);
      this.allcart=Request.data;
      this.allcart.reverse();
      console.log(this.allcart);
    })
  }


  Remove(book:any)
  {
    console.log(book.cartId);
    this.getcart.deletecart(book.cartId).subscribe((Request:any)=>
    {
      console.log(Request);
      this.snackbar.open("Book Remove Successfully", "", {
        duration: 2000,
      });
      this.getallcart();

    })
  }


  getaddress()
  {
    this.getcart.gAddress().subscribe((Request:any)=>
    {
      this.addressArray=Request.data;
      console.log(Request);
      console.log(this.addressArray);
    })
  }

  UserArray:any;
  userdata()
  {
    console.log("Tomeshwar Get users");
    this.getcart.UserAddress().subscribe((Resoponse:any)=>{
      console.log(Resoponse);
      this.UserArray=Resoponse.data;
      console.log(this.UserArray);
    })
  }


  addvalues:any=1;
  mainaddres:any;
  addvalue(type:any)
  {
    this.addvalues=type;
  
  this.mainaddres=this.addressArray.filter((x:any)=>x.TypeId==this.addvalues);
  console.log("MainAddress",this.mainaddres)
  }

addressid:any=2;
  Checkout(id:any,qnt:any)
  {
     let reqdata={
      BookId:id,
      Quantity:qnt,
      AddressId:this.addressid,
     }
     console.log("Tomeshwarrrrr",reqdata);
     if(qnt>0)
     {
     this.getcart.Checkoutdata(reqdata).subscribe((Response:any)=>{
       console.log(Response);
       this.snackbar.open("Book Ordered Successfully", "", {
        duration: 2000,
      });
     
     })
     this.route.navigateByUrl('dashboard/orderplaced')
  
}
else
{
  this.snackbar.open("Book Ordered Failed", "", {
    duration: 2000,
  });
}

  }
 
  }


