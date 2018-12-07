import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  questionTypes = [{
    value: 'text',
    text: 'Short answer',
    family: 'input'
  }, {
    value: 'textarea',
    text: 'Paragraph',
    family: 'input'
  }, {
    value: 'radio',
    text: 'Multiple choice',
    family: 'options'
  }, {
    value: 'checkbox',
    text: 'Checkboxes',
    family: 'options'
  }, {
    value: 'dropdown',
    text: 'Drop-down',
    family: 'options'
  }, {
    value: 'scale',
    text: 'Linear scale'
  }, {
    value: 'rating',
    text: 'Rating'
  }];

  form = {
    id: 0,
    title: null,
    description: null
  }
  questions = [];
  //mode: config, preview, response, readonly
  addQuestion() {
    var question = {
      type: 'radio',
      choices: ['Option 1']

    }
    this.questions.push(question)
  }

  addOption(choices) {
    // debugger;
    choices.push('Option ' + (choices.length + 1));
  }
  removeOption(choice, choices) {
    var index = choices.indexOf(choice);
    choices.splice(index, 1);
    //https://jsonplaceholder.typicode.com/users
  }
  changeQuestionType(question, $event) {
    var questionTypeObj = $event.detail.value;
    var type1 = questionTypeObj
    //are two types compatible
    if (questionTypeObj.family)
      console.log($event)
  }
}
