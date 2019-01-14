import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  correctAnswer: boolean = true;
  incorrectAnswer: boolean = true;

  constructor() { }

  validateInput(answer: {pizzaInput: string}) {
    if (answer.pizzaInput === "Pizza" || answer.pizzaInput === "pizza") {
      this.correctAnswer = false;
      this.incorrectAnswer = true;
    } else {
      this.correctAnswer = true;
      this.incorrectAnswer = false;
    }
  }

  ngOnInit() {
  }

}
