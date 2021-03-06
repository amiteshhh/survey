import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyCreatePage, SelectQuestionTypeComponent } from './survey-create.page';
import { QuestionModule } from './../../question/question.module';

const routes: Routes = [
  {
    path: '',
    component: SurveyCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[SelectQuestionTypeComponent],
  declarations: [SurveyCreatePage, SelectQuestionTypeComponent]
})
export class SurveyCreatePageModule {}
