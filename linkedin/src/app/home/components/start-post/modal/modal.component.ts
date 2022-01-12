import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;

  @Input() postId?: number;

  constructor(
    public modalController: ModalController,

  ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() { }

  onDismiss(data = null, role = 'dismiss') {
    this.modalController.dismiss(data, role);
  }

  onPost() {
    if (!this.form.valid) { return; }
    const { body } = this.form.value;
    console.log('body', body);
    this.onDismiss({
      post: {
        body,
        createdAt: new Date()
      }
    }, 'post');
  }
}
