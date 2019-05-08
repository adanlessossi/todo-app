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
    console.log("Login with: " + username + " and Password: " + password);
    console.log("Before login" + this.isUserLoggedIn());
    if (username ==='Bernard' && password==='Passw0rd'){
      sessionStorage.setItem('authenticatedUser', username);
      console.log("After login" + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    console.log("User is: " + user);
    return ! (user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
