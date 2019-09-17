import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { SnackService } from '../services/snack-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private snack: SnackService) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const user = await this.afAuth.auth.currentUser;
    const isLoggedIn = !!user;

    // tslint:disable-next-line: no-unused-expression
    !isLoggedIn ? this.snack.authError() : null;

    return isLoggedIn;
  }
}
