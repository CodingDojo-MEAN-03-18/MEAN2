import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();

  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(user: User) {
    console.log('registering user', user);

    this.auth.register(user).subscribe(
      () => {
        this.router.navigateByUrl('books');
      },
      error => {
        console.log(error);
      }
    );
  }
}
