import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../start-post/modal/modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(
    private modalController: ModalController,

  ) { }

  ngOnInit() { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class2',
    });
    await modal.present();
    const { data, role } = await modal.onDidDismiss();
    console.log('role', role, data);

  }

}
