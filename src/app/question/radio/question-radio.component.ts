import { Component, OnInit, Host } from '@angular/core';
import { QuestionComponent } from './../question.component';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.scss']
})
export class QuestionRadioComponent implements OnInit {
  question:any
  constructor(@Host() questionComponent: QuestionComponent) { 
    this.question = questionComponent.question;
  }

  ngOnInit() {
  }

  addOption(choices) {
    choices.push('Option ' + (choices.length + 1));
  }
  removeOption(choice, choices) {
    var index = choices.indexOf(choice);
    choices.splice(index, 1);
  }

}
