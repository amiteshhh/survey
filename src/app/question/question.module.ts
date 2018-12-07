import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from './question.component';
import { QuestionTextComponent } from './text/question-text.component';
import { QuestionRadioComponent } from './radio/question-radio.component';

var components = [QuestionComponent, QuestionRadioComponent, QuestionTextComponent];
@NgModule({
    imports: [IonicModule,
        CommonModule
    ],
    declarations: components,
    exports: components
})
export class QuestionModule { }
