import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = "";
  status: string = "";
  date?: Date;

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let appareil = this.appareilService.getAppareilById(+id);

    if (appareil) {
      this.name = appareil.name;
      this.status = appareil.status;
      this.date = appareil.date;
    } else {
      this.router.navigate(['/not-found']);
    }
  }

}
