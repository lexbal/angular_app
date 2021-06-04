import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Cours } from '../../models/cours';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Cours[] = [];
  nb_etuds: number = 0;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    this.getNbEtuds();
  }

  onNewNb(nb: number): void {
    //this.nb_etuds = +this.nb_etuds + +nb;
    this.getNbEtuds();
  }

  getNbEtuds(): void {
    this.nb_etuds = this.courses.reduce(
      (prev, cur) => {
        return +prev + +cur.nb_etud;
      }, 0
    );
  }
}
