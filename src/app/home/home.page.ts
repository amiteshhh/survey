import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  questionTypes = [{
    code: 'text',
    description: 'Short answer'
  }, {
    code: 'textarea',
    description: 'Paragraph'
  }, {
    code: 'radio',
    description: 'Multiple choice'
  }, {
    code: 'checkbox',
    description: 'Checkboxes'
  }, {
    code: 'select',
    description: 'Drop-down'
  }, {
    code: 'scale',
    description: 'Linear scale'
  }, {
    code: 'rating',
    description: 'Rating'
  }];

  form = {
    id: 0,
    title:null,
    description:null
  }
  questions = [];
  //mode: config, preview, response, readonly
  addQuestion(){
    var question = {
      type: 'radio',
      choices:['Option 1']
      
    }
    this.questions.push(question)
  }

  addOption(choices){
    // debugger;
    choices.push('Option ' + (choices.length + 1));
  }
  removeOption(choice, choices){
    var index = choices.indexOf(choice);
    choices.splice(index, 1);
  }
  changeQuestionType(question, questionType){
    
    this.questions.push(question)
  }
}
