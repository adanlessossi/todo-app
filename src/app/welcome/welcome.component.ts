import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some message';
  welcomeMessage = '';
  name = '';

  constructor(private route: ActivatedRoute, private welcomeService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeService.executeHelloWorldBean().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessage = response.message;
  }

  handleErrorMessage(error){
    this.welcomeMessage = error.error.message;
  }
}
