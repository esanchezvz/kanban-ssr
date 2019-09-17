import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';

const components = [LoginPageComponent];
const modules = [CommonModule, UserRoutingModule, SharedModule];

@NgModule({
  declarations: [...components, GoogleSigninDirective],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class UserModule {}
