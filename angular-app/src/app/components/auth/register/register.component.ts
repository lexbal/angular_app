import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
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

    this.authService.registerFireBase(this.f.email.value, this.f.password.value)
      .then(
        () => {
          this.router.navigate(['login']);
        },
        (error) => {
          this.error = error;
        }
      );
      
    this.loading = false;
  }
}
