import { Component, OnInit } from '@angular/core';
import { AddressdataService } from 'src/Services/AddressServices/addressdata.service';

@Component({
  selector: 'app-getallorders',
  templateUrl: './getallorders.component.html',
  styleUrls: ['./getallorders.component.scss']
})
export class GetallordersComponent implements OnInit {

  constructor(private order:AddressdataService) { }
  OrderArray:any;
  ngOnInit(): void {
    this.GetOrder();
  }

  GetOrder()
  {
    this.order.getOrder().subscribe((Request:any)=>{
      console.log(Request);
      this.OrderArray=Request.data;
      this.OrderArray.reverse();
    })

  }

}
