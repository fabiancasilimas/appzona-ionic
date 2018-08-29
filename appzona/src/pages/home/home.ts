import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  denunciaPagina(){
    this.navCtrl.push(AboutPage);
  }
  loginPagina(){
    this.navCtrl.push(LoginPage);
  }

}
