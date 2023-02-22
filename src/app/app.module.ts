import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-6bgy6uno1cceykyf.us.auth0.com',
      clientId: 'aDNim12e5ADqhjuMZjT54ikzzQLtp3PA',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
