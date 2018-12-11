import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/survey-create', pathMatch: 'full' },
  { path: 'survey-create', loadChildren: './survey/create/survey-create.module#SurveyCreatePageModule' },
  { path: 'survey-response', loadChildren: './survey/response/survey-response.module#SurveyResponsePageModule' },
  { path: 'survey-summary', loadChildren: './survey/summary/survey-summary.module#SurveySummaryPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
