import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      username: ['', Validators.required],
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
      this.authService.login(this.f.username.value, this.f.password.value)
        .subscribe(
          (data) => {
            if (data) {
              this.router.navigate(['/']);
            } else {
              this.error = true;
            }
          },
          (error) => {
            this.error = error;
          }
        );

      this.loading = false;
    }
  }
}
