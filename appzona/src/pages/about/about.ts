import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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

  constructor(public navCtrl: NavController) {

  }

}
