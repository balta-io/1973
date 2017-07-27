import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PhotosPage } from '../photos/photos';
import { TakePicturePage } from '../take-picture/take-picture';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photosTab: any;
  public profileTab: any;
  public user: string;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController) {
    this.photosTab = PhotosPage;
    this.profileTab = ProfilePage;
  }

  showSendPhoto() {
    let modal = this.modalCtrl.create(TakePicturePage);
    modal.present();
  }
}
