import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserdataService } from 'src/Services/UserServices/userdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  
  registerForm! : FormGroup;
  submitted = false;

  constructor(private _fb: FormBuilder,private router:Router,private user:UserdataService,private snackbar:MatSnackBar) { }
  
  
  ngOnInit() {
      this.registerForm = this._fb.group({
  
          FullName: ['', Validators.required],
          Email: ['', Validators.required],
          Password: ['', Validators.required],
          PhoneNumber: ['', Validators.required],
      })
    }

get f() { return this.registerForm.controls; }

 reqdata:any={
 }
  
onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }

   this.reqdata={
    FullName:this.registerForm.value.FullName,
    Email:this.registerForm.value.Email,
    Password:this.registerForm.value.Password,
    Mobile:this.registerForm.value.PhoneNumber,
  }
  console.log(this.reqdata);

   this.user.registration(this.reqdata).subscribe((response:any)=>
   {
     console.log(this.reqdata);
    console.log(response);
    this.snackbar.open("User Registration Successfully", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/login') 
    })
  }
  
}

    
    
    
    