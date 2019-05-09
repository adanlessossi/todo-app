import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {

  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient, private basicAuthenticationService: BasicAuthenticationService) { }

  executeHelloWorldBean(){
    let basicHeaderString = this.basicAuthenticationService.getAuthenticationToken();

    let header = new HttpHeaders({
      Authorization: basicHeaderString
    })
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`, {headers: header});
  }

  
}
