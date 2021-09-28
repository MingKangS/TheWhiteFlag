import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/interfaces/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	email: string = "";
	password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

	signUp(user: AuthUser){
		console.log("Sign up:", user.email, user.password);
	}

	hasRoute(route: string) {
    return this.router.url === route;
  }

}
