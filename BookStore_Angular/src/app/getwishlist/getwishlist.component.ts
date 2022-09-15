import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistdataService } from 'src/Services/WishListServices/wishlistdata.service';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {

  wishlistArray:any;
  constructor(private wishlist:WishlistdataService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getwishlist();
  }

  getwishlist()
  {
    this.wishlist.getwishdata().subscribe((Request:any)=>
    {
      console.log(Request);
      console.log("Tomeshwar sahu",Request.data);
      this.wishlistArray=Request.data;
      this.wishlistArray.reverse();
    })
  }


  removerwishlist(data:any)
  {
    console.log(data.wishListId);
    this.wishlist.removerlist(data.wishListId).subscribe((Request:any)=>{
      console.log(Request);
      this.snackbar.open("Book Remove Successfully","" ,{
        duration: 2000,
      });
      this.getwishlist();
    })
  }

}
