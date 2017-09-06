import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  lat: number =  51.6802326827058;
  lng: number = 7.808339595794678;
  zoom: number = 5;
  draggable: string = '1';

  makerSel: any = null;

  constructor(
    public _ms: MapasService
  ) {

  }
  clickMapa( evento ) {
    let nuevoMarcador: Marcador  = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      title: 'marcador nuevo',
      draggable: true
    };

    this._ms.addMarker(nuevoMarcador);

  }

  clicMaker(mar: Marcador, i: number) {
    console.log(mar, i);
    this.makerSel = mar;
    if ( mar.draggable == true) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }

  }

  dragEndMaker(mar: Marcador, event) {
    console.log(mar, event);
    let lat = event.coords.lat;
    let lng = event.coords.lng;

    mar.lat = lat;
    mar.lng= lng;

    this._ms.saveMarkers();
  }

  deleteMaker(idx: number) {
    this._ms.deleteMaker(idx);
    this.makerSel = null;
  }
  changeDraggable() {

    if (this.draggable === '1') {
      this.makerSel.draggable = true;
    } else {
      this.makerSel.draggable = false;
    }
    console.log(this.draggable);
  }


}
