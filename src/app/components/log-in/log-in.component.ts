import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/interfaces/auth';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
	email: string = "";
	password: string = "";


  constructor(
		private router: Router,
    private authService: SocialAuthService
	) { }

  ngOnInit(): void {
  }

	

	logIn(user: AuthUser) {

    console.log("The credentials entered are:", user.email, user.password);
  
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/home').then();
    });
		//   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: this.email,
  //       password: this.password,
  //     }),
  //   };

  //   fetch("http://localhost:8000/api/log-in", requestOptions)
  //     .then(async (response) => {
  //       console.log(response);
  //     });
	}

}
