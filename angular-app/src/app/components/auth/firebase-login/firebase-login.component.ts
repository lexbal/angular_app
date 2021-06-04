import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-firebase-login',
  templateUrl: './firebase-login.component.html',
  styleUrls: ['./firebase-login.component.scss']
})
export class FirebaseLoginComponent implements OnInit {

  form!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated();
    
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    
    if (!this.authService.currentUser) {
      this.authService.loginFireBase(this.f.email.value, this.f.password.value)
        .then(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            this.error = error;
          }
        );

      this.loading = false;
    }
  }
}
