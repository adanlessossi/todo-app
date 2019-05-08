import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage: 'Oooopppss! Something weird happened! Contact Support at ***';

  constructor() { }

  ngOnInit() {
  }

}
