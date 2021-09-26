import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	email: string = "";
	password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

	signUp(user: AuthUser){
		console.log("Sign up:", user.email, user.password);
	}

}
