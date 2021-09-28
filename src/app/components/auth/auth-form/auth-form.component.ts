import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AuthUser } from 'src/app/interfaces/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
	@Output() authFormSubmit: EventEmitter<AuthUser> = new EventEmitter();
	email: string = "";
	password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

	onFormSubmit() {
		// if (!this.email || !this.password) {
		// 	return;
		// }

    const authUser = {
      email: this.email,
			password: this.password
    };

    this.authFormSubmit.emit(authUser);

    this.email = '';
    this.password = '';
	}

	hasRoute(route: string) {
    return this.router.url === route;
  }

}
