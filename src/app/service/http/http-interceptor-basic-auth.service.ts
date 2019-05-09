import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    //let username = 'Bernard';
    //let password = 'Passw0rd';
    //let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicHeaderString = this.basicAuthenticationService.getAuthenticationToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    if (basicHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicHeaderString
        }
      })
    }    
    return next.handle(request);
  }
}
