import { Component } from '@angular/core';
import { AuthService } from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultra-commerce';
  isLoggedIn = true;

  constructor(
    public authService: AuthService
  ) { }

  logout() {
    this.authService.logout();
  }
}
