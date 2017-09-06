import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador';



@Injectable()
export class MapasService {
  marcadores:  Marcador[];

  constructor() {
    this.loadMakers();

    let nuevoMarcador: Marcador = {
      lat: '51.6802326827058',
      lng: '7.808339595794678',
      title: 'titulo',
      draggable: true

    }

    this.marcadores.push( nuevoMarcador );

  }

  addMarker(marker: Marcador) {
    this.marcadores.push(marker);
    this.saveMarkers();
  }

  saveMarkers() {
    localStorage.setItem('makers', JSON.stringify(this.marcadores) );
  }

  loadMakers() {
    if (localStorage.getItem('makers')) {
      this.marcadores = JSON.parse( localStorage.getItem('makers') );
    } else {
      this.marcadores = [];
    }
  }

  deleteMaker(idx: number) {
    this.marcadores.splice(idx,1);
    this.saveMarkers();
  }

}
