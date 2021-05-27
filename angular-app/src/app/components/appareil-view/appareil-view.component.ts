import { Component, OnInit } from '@angular/core';
import { Appareil } from '../../models/appareil';
import { AppareilService } from '../../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils: Appareil[] = [];
  appareilService!: AppareilService;

  constructor(private $appareilService: AppareilService) { 
    this.appareilService = $appareilService;
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

}
