import { Component, OnInit, Input, Injector, Inject } from '@angular/core';
// import { Input } from '@ionic/angular';

import {NavParams} from '@ionic/angular'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question:any
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
  constructor(injector: Injector) { 
    var navParams = injector.get(NavParams, 'notFound')
    console.log(navParams)
  }

  ngOnInit() {
    this.question = this.question || {type:'radio'}
    console.log(this.question)
  }

 

  // changeQuestionType(question, $event) {
  //   var questionTypeObj = $event.detail.value;
  //   var type1 = questionTypeObj
  //   //are two types compatible
  //   if (questionTypeObj.family)
  //     console.log($event)
  // }

}
