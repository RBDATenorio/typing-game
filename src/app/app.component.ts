import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Typing Game';
  randomText = lorem.sentence();
  enteredText = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.enteredText = value;
  }

  compare (randomLetter: string, enteredLetter: string) {
      if (!enteredLetter) {
        return 'pending';
      }

      return randomLetter === enteredLetter ? 'correct' : 'incorrect';

      }

}



