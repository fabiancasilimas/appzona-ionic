import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDenunciasProvider } from '../../providers/lista-denuncias/lista-denuncias';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  denuncias

  lista: Array<any> = [
    {
      titulo:'Robo a persona',
      color:'#999'
    },
    {
      titulo:'Delito informático',
      color:'#999'
    },
    {
      titulo:'Extorsión',
      color:'#999'
    },
    {
      titulo: 'Hurto a residencia',
      color:'#999'
    }
  ]

  constructor(public navCtrl: NavController,public proveedor:ListaDenunciasProvider) {

  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.denuncias = data;},
      (error)=> {console.log(error);}
    )
  }

}
