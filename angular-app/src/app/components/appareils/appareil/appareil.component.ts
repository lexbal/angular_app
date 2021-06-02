import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() id?: number;
  @Input() appareilName: string = "";
  @Input() appareilStatus: string = "";
  @Input() appareilDate?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

}
