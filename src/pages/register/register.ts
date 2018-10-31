import { User } from './../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import {Component} from "@angular/core";
import {LoginPage} from "../login/login";
import {NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user = {} as User;
  constructor(
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public nav: NavController,
    public navParams: NavParams) {
  }

  // register and go to home page
  async registro(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      const alert = this.alertCtrl.create({
        title: 'Cuenta creada!',
        subTitle: 'Se ha creado tu cuenta',
        buttons: ['Entendido']
      });
      alert.present();
      console.log(result)
    }
    catch (e){
      const alert = this.alertCtrl.create({
        title: 'La cuenta ya existe!',
        subTitle: 'El correo ya está asociada a una cuenta',
        buttons: ['Entendido']
      });
      alert.present();
      console.error(e);
      }
    }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
