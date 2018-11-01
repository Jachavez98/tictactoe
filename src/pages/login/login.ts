import { ImcPage } from './../imc/imc';
import { Component } from "@angular/core";
import {
  NavController,
  AlertController,
  ToastController,
  MenuController
} from "ionic-angular";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { User } from './../../models/user';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {} as User;
  constructor(
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController
  ) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (result) {
        this.nav.setRoot(ImcPage);
        window.localStorage.setItem("email", this.user.email);
      } else {
        const alert = this.alertCtrl.create({
          title: "Fallo al iniciar sesión!",
          subTitle: "Introduciste mal tu correo o contraseña",
          buttons: ["Entendido"]
        });
        alert.present();
      }
    } catch (e) {
      console.error(e);
      const alert = this.alertCtrl.create({
        title: "Fallo al iniciar sesión!",
        subTitle: "Introduciste mal tu correo o contraseña",
        buttons: ["Entendido"]
      });
      alert.present();
    }
  }
}
