import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createUser } from 'src/app/shared/services/users/types';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup

  constructor(
    private _builder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm () {
    this.signupForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      username: ['', Validators.required]
    })
  }

  public signup (value: createUser) {

    const { email, password, username } = value

    this.usersService.createUser({
      email,
      password,
      username
    })
  }
}
