import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
	email: string = "";
	password: string = "";


  constructor() { }

  ngOnInit(): void {
  }

	logIn(user: AuthUser) {

    console.log("The credentials entered are:", user.email, user.password);
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
