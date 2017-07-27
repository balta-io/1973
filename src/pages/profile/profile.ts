import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    public user: string = '';

    constructor(
        public navCtrl: NavController,
        private afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user.email
            }
        });
    }

    submit() {
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(LoginPage);
    }
}
