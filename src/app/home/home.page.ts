import { Component } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authService : AuthService) {}

  OnLogout(){
    this.authService.logout();
  }

}
