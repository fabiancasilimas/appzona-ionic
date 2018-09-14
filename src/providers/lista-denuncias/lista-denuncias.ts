import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaDenunciasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDenunciasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ListaDenunciasProvider Provider');
  }

  obtenerDatos(){
    return this.http.get('http://mizona.herokuapp.com/posts.json');
  }

}
