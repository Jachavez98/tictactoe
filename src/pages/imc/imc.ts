import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {
altura:number;
peso:number;
resultado:number;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

calcularimc(){
      const resultado = this.altura*this.peso;
      const alert = this.alertCtrl.create({
        title: 'Indice de masa corporal',
        subTitle: 'Tu indice de masa corporal es: '+(this.peso)/((this.altura/100)*(this.altura/100)),
        buttons: ['Entendido']
      });
      alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

}
