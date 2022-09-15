import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayGetAllBooksComponent } from './display-get-all-books/display-get-all-books.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GetAllBooksComponent } from './get-all-books/get-all-books.component';
import { GetallcartComponent } from './getallcart/getallcart.component';
import { GetallordersComponent } from './getallorders/getallorders.component';
import { GetbookbyidComponent } from './getbookbyid/getbookbyid.component';
import { GetwishlistComponent } from './getwishlist/getwishlist.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthenticationGuard } from 'src/Authgaurd/authentication.guard';


const routes: Routes = [

{
  path: 'login',
  component: LoginComponent
},
{
  path:'resetpassword/:token',
  component:ResetpasswordComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'forgetpassword',
  component:ForgetPasswordComponent
},

{
  path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[ 
  {path:'',redirectTo:"/dashboard/books",pathMatch:"full",},
  {path:'books',component:GetAllBooksComponent},
  {path:'getbookbyid',component:GetbookbyidComponent},
  {path:'getallcart',component:GetallcartComponent},
  {path:'getwishlist',component:GetwishlistComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'getorders',component:GetallordersComponent},
  {path:'orderplaced',component:OrderplacedComponent}

]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
