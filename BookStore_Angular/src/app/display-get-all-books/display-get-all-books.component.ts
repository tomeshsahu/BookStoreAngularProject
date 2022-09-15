import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from 'src/Services/BookServices/cartdata.service';



@Component({
  selector: 'app-display-get-all-books',
  templateUrl: './display-get-all-books.component.html',
  styleUrls: ['./display-get-all-books.component.scss']
})
export class DisplayGetAllBooksComponent implements OnInit {

  constructor(private book:CartdataService,private route:Router) { }
  @Input() BooksList:any;
  ngOnInit(): void {
  }

  getbookArray:any;
  bookidid:any;
  bookid(getdatabyid:any)
  {
    localStorage.setItem('bookid', getdatabyid.bookId);
    console.log("it is a book ",getdatabyid.bookId);
    this.route.navigateByUrl('dashboard/getbookbyid')
  }
}
