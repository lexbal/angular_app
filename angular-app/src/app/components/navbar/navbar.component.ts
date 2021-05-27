import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed=true;

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  onLogout() {
    this.authService.logout();
  }
}
