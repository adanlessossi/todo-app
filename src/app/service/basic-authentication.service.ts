import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class AuthenticationBean {

  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  authenticated = false;
  errorMessage = 'Invalid credentials';

  constructor(private router: Router, private httpClient: HttpClient) { }

  authenticate(username, password) {
    console.log("Login with: " + username + " and Password: " + password);
    console.log("Before login" + this.isUserLoggedIn());
    if (username === 'Bernard' && password === 'Passw0rd') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log("After login" + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    console.log("User is: " + user);
    return !(user === null);
  }

  executeBasicAuthentication(username, password) {
    let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicHeaderString
    })
    return this.httpClient.get<AuthenticationBean>('http://localhost:8080/basicauth', { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          return data;
        }
      )
    );
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
