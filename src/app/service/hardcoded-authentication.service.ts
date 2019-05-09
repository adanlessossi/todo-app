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
    if (username ==='Bernard' && password==='Passw0rd'){
      sessionStorage.setItem('authenticatedUser', username);
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
