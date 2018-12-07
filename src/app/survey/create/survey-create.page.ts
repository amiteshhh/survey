import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.page.html',
  styleUrls: ['./survey-create.page.scss'],
})
export class SurveyCreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
  // question = {//save as master question
  //   title: 'string',
  //   type: 'text',
  //   options: ['Option 1'],
  //   hasOther: false,
  //   isMandatory: false,
  //   optionsAnswerCount: undefined,//object//{option1:20}
  //   skippedQuestionCount: 0
  // }
}
