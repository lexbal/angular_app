import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils: Appareil[] = [
    {"id": 0, "name": "Machine à laver", "status": "allumé", "date": this.randomDate(new Date(2012, 0, 1), new Date())},
    {"id": 1, "name": "Frigo", "status": "éteint", "date": this.randomDate(new Date(2012, 0, 1), new Date())},
    {"id": 2, "name": "Ordinateur", "status": "allumé", "date": this.randomDate(new Date(2012, 0, 1), new Date())},
  ];

  constructor() { }

  switchOnAll(): void {
    if (confirm('Etes-vous sûr de vouloir allumer tous vos appareils ?')) {
      this.appareils.map(appareil => {
        appareil.status = "allumé";
        appareil.date = new Date();
      })
    }
  }

  switchOffAll(): void {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareils.map(appareil => {
        appareil.status = "éteint";
        appareil.date = new Date();
      })
    }
  }

  randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
