import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { EmailLoginComponent } from './email-login/email-login.component';

const components = [LoginPageComponent, EmailLoginComponent];
const modules = [
  CommonModule,
  UserRoutingModule,
  SharedModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...components, GoogleSigninDirective],
  imports: [...modules],
})
export class UserModule {}
