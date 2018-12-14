import { Directive, HostListener } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Directive({
  selector: '[appModalClose]'
})
export class ModalCloseDirective {

  constructor(private modalController: ModalController) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.modalController.dismiss();
  }
}
