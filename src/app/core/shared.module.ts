import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalCloseDirective } from '../core/directive/modal-close.directive';

var components = [ModalCloseDirective];
@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: components,
  //@ts-ignore
  exports: components.concat([
    IonicModule,
    CommonModule
  ])
})
export class SharedModule { }
