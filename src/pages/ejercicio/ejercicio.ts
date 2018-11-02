import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
interface ToDo {
  Duracion: string;
  Fecha: string;
  Tipo: string;
}

@IonicPage()
@Component({
  selector: 'page-ejercicio',
  templateUrl: 'ejercicio.html',
})
export class EjercicioPage {
  todoCollection: AngularFirestoreCollection<ToDo>;
  todo: Observable<ToDo[]>;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private asf: AngularFirestore) {
  }

  newItem(){
    let promt = this.alertCtrl.create({
      title: 'Añadir actividad',
      message: 'Indica el tipo de actividad',
      inputs: [{
        name: 'Tipo',
        placeholder: 'Tipo de actividad a añadir'
      },{
        name: 'Duracion',
        placeholder: 'Duracion de la actividad'
      },{
        name: 'Fecha',
        placeholder: 'Fecha de la actividad'
      }],
      buttons: [{
        text:'Cancelar'
      },{
        text: 'Guardar',
        handler: data => {
          this.añadiractividad(data.Tipo, data.Duracion,data.Fecha)
        }
      }
      ]
    }).present();
  }

  añadiractividad(Tipo: string, Duracion: String,Fecha: String) {
    this.asf.collection('ejercicio').add({ Duracion, Fecha,Tipo}).then(newItem => {

    })
  }

  ionViewDidLoad() {
    this.todoCollection = this.asf.collection('ejercicio');
    this.todo = this.todoCollection.valueChanges();
  }

}
