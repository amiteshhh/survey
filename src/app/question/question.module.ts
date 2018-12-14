import { NgModule } from '@angular/core';

import { SharedModule } from './../core/shared.module';

import { QuestionComponent } from './question.component';
import { ConfigureQuestionComponent } from './configure/configure-question.component';
import { RadioQuestionComponent } from './radio/radio-question.component';
import { TextQuestionComponent } from './text/text-question.component';

// var components = [QuestionComponent, , , ConfigureQuestionComponent];
@NgModule({
    imports: [SharedModule],
    entryComponents: [ConfigureQuestionComponent],
    declarations: [QuestionComponent, ConfigureQuestionComponent, RadioQuestionComponent, TextQuestionComponent],
    exports: [QuestionComponent]
})
export class QuestionModule { }
