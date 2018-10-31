import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';

interface ToDo {
  peso: string;
  fecha: string;
}

@IonicPage()
@Component({
  selector: 'page-peso',
  templateUrl: 'peso.html',
})
export class PesoPage {

  todoCollection: AngularFirestoreCollection<ToDo>;
  todo: Observable<ToDo[]>;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private asf: AngularFirestore) {
  }

  ionViewDidLoad() {
    this.todoCollection = this.asf.collection('peso');
    this.todo = this.todoCollection.valueChanges();
  }

  newItem(){
    let promt = this.alertCtrl.create({
      title: 'Añadir peso',
      message: 'Indica el peso a añadir',
      inputs: [{
        name: 'peso',
        placeholder: 'Peso a añadir'
      },{
        name: 'fecha',
        placeholder: 'Fecha del peso'
      }],
      buttons: [{
        text:'Cancelar'
      },{
        text: 'Guardar',
        handler: data => {
          this.añadirpeso(data.peso, data.fecha)
        }
      }
      ]
    }).present();
  }
  añadirpeso(peso: string, fecha: String) {
    this.asf.collection('peso').add({ peso, fecha}).then(newItem => {

    })
  }

}
