import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

/**
 * Generated class for the DirectorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})
export class DirectorioPage {

  directorioLista = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.directorioLista = [
      {
        'title': 'Alamos Norte',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Autopista Medellin',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bellavista Occidental',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bochica',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bochica II',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bolivia',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bolivia Oriental',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bonanza',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Bosque Popular',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Boyaca',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
      {
        'title': 'Centro Engativa',
        'icon': 'document',
        'description': 'Dirección: TRANSVERSAL 93 # 64 G-00 | Teléfono: 4368494',
        'color': '#999'
      },
    ]
  }
// Ciudad Bachue
// Ciudad Bachue I
// Ciudadela Colsubsidio
// El Cedro
// El Cedro A.S.D.
// El Cortijo
// El Dorado
// El Encanto
// El Laurel
// El Madrigal
// El Muelle
// El Real
// Engativa
// Florencia
// Florida Blanca
// Florida Blanca Norte
// Garces Navas
// Garces Navas Oriental
// Jardin Botanico
// La Cabana
// La Estrada
// La Estradita
// La Granja
// La Primavera
// La Serena
// La Soledad Norte
// Las Ferias
// Las Ferias Occidental
// Los Alamos
// Los Angeles
// Los Cerezos
// Minuto De Dios
// Normandia
// Normandia Occidental
// Paloblanco
// Paris
// Paris Gaitan
// Quintas De Sta. Barbara
// Quirigua
// San Ignacio
// San Joaquin
// Santa Helenita
// Santa Cecilia
// Santa Maria
// Santa Monica
// Sn. Antonio Engativa
// Tabora
// Villa Amalia
// Villa Del Mar
// Villa Gladys
// Villa Luz
// Villas De Granada
// Villas De Granada I

  openNavDetailsPage(item) {
    this.navCtrl.push(MasinfoPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

}
