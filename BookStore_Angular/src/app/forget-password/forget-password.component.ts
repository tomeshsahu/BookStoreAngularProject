import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserdataService } from 'src/Services/UserServices/userdata.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetForm!:FormGroup;
  submitted=false;
  constructor(private _fb:FormBuilder,private user:UserdataService, private router:Router) { }
 

  ngOnInit(): void {
    this.forgetForm = this._fb.group({
      Email: ['', Validators.required],
  })
  }

  onSubmit()
  {
    this.submitted=true;
    if(this.forgetForm.invalid)
    {
      return;
      console.log("invalid");
    }

    let reqdata={
      email:this.forgetForm.value.Email
    }
    console.log("Clicked");
    console.log(this.forgetForm.value.Email);
  
  console.log(reqdata);
  this.user.forgetpassword(reqdata).subscribe((response:any)=>
  {
   console.log(response);
  //  this.snackbar.open("Login Successfull");
  
   })

}
}
