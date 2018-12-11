import { ConfigureQuestionPage } from './../../question/configure/configure-question.page';

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.page.html',
  styleUrls: ['./survey-create.page.scss'],
})
export class SurveyCreatePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  form = {
    id: 0,
    title: null,
    description: null
  }
  questions = [];
  //mode: config, preview, response, readonly
  // addQuestion() {
    configureQuestion1() {
    var question = {
      type: 'radio',
      choices: ['Option 1']

    }
    this.questions.push(question)
  }

  async configureQuestion(question){
    const modal = await this.modalController.create({
      component: ConfigureQuestionPage,
      componentProps: { question: question }
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
