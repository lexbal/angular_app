import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form!: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  get f() { return this.form.controls; }

  getHobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  onAddHobby() {
    this.getHobbies().push(
      this.formBuilder.group({
        name: ''
      })
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.loading = true;

    console.log(this.f);

    this.userService.addUser(new User(
      this.f.firstname.value,
      this.f.lastname.value, 
      this.f.username.value,
      this.f.email.value,
      this.f.password.value,
      this.f.drinkPreference.value,
      this.f.hobbies.value ? this.f.hobbies.value : [] 
    ));
    this.router.navigate(['users']);
  }
}
