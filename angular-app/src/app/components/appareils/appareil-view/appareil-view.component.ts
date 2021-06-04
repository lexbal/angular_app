import { Component, OnInit } from '@angular/core';
import { Appareil } from '../../../models/appareil';
import { AppareilService } from '../../../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: Appareil[] = [];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareilService.appareilSubject.subscribe(
      (appareils: Appareil[]) => {
        this.appareils = appareils;
      }
    );

    this.appareilService.emitAppareilSubject();
  }

  onSwitchOnAll():void {
    this.appareilService.switchOnAll();
  }

  onSwitchOffAll():void {
    this.appareilService.switchOffAll();
  }
}
