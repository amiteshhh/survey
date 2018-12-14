import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ConfigureQuestionComponent } from './../../question/configure/configure-question.component';

@Component({
  templateUrl: './select-question-type.html'
})
export class SelectQuestionTypeComponent {
}

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.page.html',
  styleUrls: ['./survey-create.page.scss'],
})
export class SurveyCreatePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
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
  // addQuestion() {
  configureQuestion(questionType) {
    //create empty question here
    var question = {
      type: 'radio',
      choices: ['Option 1']
    }
    // this.questions.push(question)
    this.showConfigureQuestion(question)
  }

  async showConfigureQuestion(question) {
    const modal = await this.modalController.create({
      component: ConfigureQuestionComponent,
      componentProps: { question: null }
    });
    return await modal.present();
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
