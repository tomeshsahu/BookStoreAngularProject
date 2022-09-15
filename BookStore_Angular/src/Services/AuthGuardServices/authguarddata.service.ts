import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguarddataService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    } 
}
