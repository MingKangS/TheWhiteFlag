import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthFormComponent } from './components/auth/auth-form/auth-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/main/map/map.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './components/main/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AuthFormComponent,
    SignUpComponent,
    HomeComponent,
    MapComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		SocialLoginModule,
  GraphQLModule,
  HttpClientModule
  ],
  providers: [
		{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '305436206437-ta3ads8lrv0l8d557ei6ubub3vc77t59.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
