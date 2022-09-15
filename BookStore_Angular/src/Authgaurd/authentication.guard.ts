import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguarddataService } from 'src/Services/AuthGuardServices/authguarddata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard{

  durationInSecond=5;
  token:any;
  constructor(private authguard:AuthguarddataService,private router:Router){}
  canActivate():boolean{
    if(!this.authguard.gettoken())
    {
      this.router.navigateByUrl("/login");
    }
    return this.authguard.gettoken();
  }
   
  }
  

