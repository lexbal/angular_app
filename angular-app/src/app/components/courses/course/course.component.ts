import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cours } from 'src/app/models/cours';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() contenu!: Cours
  @Output() newNb: EventEmitter<number> = new EventEmitter<number>();

  lastNb: number = 0;

  constructor() { }

  ngOnInit(): void { }

  updateNb(): void {
    this.newNb.emit(this.contenu.nb_etud);
  }
}
