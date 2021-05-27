import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

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
  returnUrl: string = "";

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; 
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.loading = true;

    if (!this.authService.isAuthenticated()) {
      this.authService.login(this.f.username.value, this.f.password.value)
        .subscribe(
          data => {
            if (data) {
              this.router.navigate([this.returnUrl]);
            } else {
              this.error = true;
            }

            this.loading = false;
          },
          error => {
            this.error = true;
            this.loading = false;
          }
        );
    }
  }

}
