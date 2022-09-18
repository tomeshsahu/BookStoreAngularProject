import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from 'src/Services/BookServices/cartdata.service';
import { DataServiceService } from 'src/Services/DataServices/dataservices.service';



@Component({
  selector: 'app-display-get-all-books',
  templateUrl: './display-get-all-books.component.html',
  styleUrls: ['./display-get-all-books.component.scss']
})
export class DisplayGetAllBooksComponent implements OnInit {
  msg:any;
  isActive:boolean=false;
  searchWord:any;
subscription:any;
message:any;
  constructor(private book:CartdataService,private route:Router,private dataService:DataServiceService) { }
  @Input() BooksList:any;

  ngOnInit(): void {
    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      console.log("display card search data===", message.data[0]);
      this.searchWord=message.data[0]
  })

  this.BooksList();
}

  getbookArray:any;
  bookidid:any;
  bookid(getdatabyid:any)
  {
    localStorage.setItem('bookid', getdatabyid.bookId);
    console.log("it is a book ",getdatabyid.bookId);
    this.route.navigateByUrl('dashboard/getbookbyid')
  }

  lowtohigh(){
    this.BooksList= this.BooksList.sort((low:any,high:any)=> low.discountedPrice-high.discountedPrice);
    console.log("Low To Hight",this.BooksList);

    }

  hightolow(){
    this.BooksList= this.BooksList.sort((low:any,high:any)=> high.discountedPrice-low.discountedPrice);
    console.log("High To Loww",this.BooksList);
 
  }

  newestarrivals(){
    this.BooksList;
    console.log("Recent",this.BooksList);
  }
}
