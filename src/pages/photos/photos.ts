import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ModalController, LoadingController } from 'ionic-angular';
import { ShowMapPage } from '../show-map/show-map';

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  public photos: any[] = [];

  constructor(db: AngularFireDatabase, private modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({ content: "Carregando fotos..." });
    loader.present();

    db.list('/photos').subscribe(photos => {
      this.photos = photos.reverse();
      loader.dismiss();
    });
  }

  showMap(location) {
    let modal = this.modalCtrl.create(ShowMapPage, { location: location });
    modal.present();
  }
}
