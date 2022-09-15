import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserdataService } from 'src/Services/UserServices/userdata.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false;
  constructor(private _fb:FormBuilder,private router:Router,private user:UserdataService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this._fb.group({

        Email: ['', Validators.required],
        Password: ['', Validators.required],

    })
  }

  onSubmit()
  {
    this.submitted=true;
    console.log(this.loginForm.value.Email);

        if(this.loginForm.value.invalid)
        {
          return;
        }
    let reqdata = {
              
              Email: this.loginForm.value.Email,
              Password: this.loginForm.value.Password
            }
                  console.log(reqdata);
                  this.user.login(reqdata).subscribe((response:any)=>
                  {
                   console.log(response);
                   localStorage.setItem("token",response.data);
                   this.snackbar.open("User Login Successfully", "", {
                    duration: 2000,
                  });
                   this.router.navigateByUrl('/dashboard') 
                   })
           }
}
