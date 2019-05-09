import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export class AuthenticationBean {

  constructor(public message: string) { }
}

export const TOKEN = 'authenticationToken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  authenticated = false;
  errorMessage = 'Invalid credentials';

  constructor(private router: Router, private httpClient: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  executeBasicAuthentication(username, password) {
    let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicHeaderString
    })
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  getAuthenticationToken() {
    if (this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
    }    
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
