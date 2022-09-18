import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GetAllBooksComponent } from './get-all-books/get-all-books.component';
import { DisplayGetAllBooksComponent } from './display-get-all-books/display-get-all-books.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetbookbyidComponent } from './getbookbyid/getbookbyid.component';
import { GetallcartComponent } from './getallcart/getallcart.component';
import {MatIconModule} from '@angular/material/icon';
import { GetwishlistComponent } from './getwishlist/getwishlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetallordersComponent } from './getallorders/getallorders.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { PipefilterdataPipe } from './Pipedata/pipefilterdata.pipe';
import {MatSelectModule} from '@angular/material/select'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    GetAllBooksComponent,
    DisplayGetAllBooksComponent,
    DashboardComponent,
    GetbookbyidComponent,
    GetallcartComponent,
    GetwishlistComponent,
    MyprofileComponent,
    GetallordersComponent,
    OrderplacedComponent,
    PipefilterdataPipe,
    

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatSnackBarModule,
    CommonModule,
    MatSelectModule
    
    

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
