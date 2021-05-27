import { Injectable } from '@angular/core';
import { Appareil } from '../appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils: Appareil[] = [
    {"id": 0, "name": "Machine à laver", "status": "allumé"},
    {"id": 1, "name": "Frigo", "status": "éteint"},
    {"id": 2, "name": "Ordinateur", "status": "allumé"},
  ];

  constructor() { }

  switchOnAll(): void {
    if (confirm('Etes-vous sûr de vouloir allumer tous vos appareils ?')) {
      this.appareils.map(appareil => appareil.status = "allumé")
    }
  }

  switchOffAll(): void {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareils.map(appareil => appareil.status = "éteint")
    }
  }
}
