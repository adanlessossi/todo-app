import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {

  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBean(){
    let basicHeaderString = this.createBasicHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicHeaderString
    })
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean', {headers: header});
  }

  createBasicHttpHeader(){
    let username = 'Bernard';
    let password = 'Passw0rd';
    let basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicHeaderString;
  }
}
