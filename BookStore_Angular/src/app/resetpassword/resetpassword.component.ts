import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/Services/UserServices/userdata.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private _fb: FormBuilder,private router:Router,private user:UserdataService) { }
  resetForm! : FormGroup;
  submitted = false;

  
  ngOnInit() {
    this.resetForm = this._fb.group({

      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    
    console.log(this.resetForm.value.Password);
    console.log(this.resetForm.value.ConfirmPassword);
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
     }
    
    let reqdata = {
      Password: this.resetForm.value.Password,
      ConfirmPassword: this.resetForm.value.ConfirmPassword,
    }
    console.log(reqdata);

    this.user.reset(reqdata).subscribe((response:any)=>
    {
      console.log(reqdata);
     console.log(response);
     this.router.navigateByUrl('/login') 
     })
   }

}

