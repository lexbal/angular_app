import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  currentUser!: User|null;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated();
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user;
      } 
    );
  }

  onLogout(): void {
    this.authService.logout();
  }
}
