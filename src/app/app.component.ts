import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async ngOnInit() {
    const user = await this.afAuth.auth.currentUser;
    const isLoggedIn = !!user;

    !isLoggedIn
      ? this.router.navigate(['/'])
      : console.log('Logged in as ', user.email);
  }
}
