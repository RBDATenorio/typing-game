import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Typing Game';
  randomText = 'Test';
  result = '';

  getResult() {
    this.result = 'You Win!'
  }
}
