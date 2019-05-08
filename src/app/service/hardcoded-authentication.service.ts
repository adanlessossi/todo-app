import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  authenticated = false;
  errorMessage = 'Invalid credentials';

  constructor(private router:Router) { }

  authenticate(username, password){
    console.log("Before login" + this.isUserLoggedIn());
    if (username ==='username' && password==='Passw0rd'){
      sessionStorage.setItem('authenticatedUser', username);
      console.log("After login" + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return ! (user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
