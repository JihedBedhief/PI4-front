import { Component, OnInit } from '@angular/core';
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from "keycloak-js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'pidev-app-angular';
  public profile!: KeycloakProfile;

  constructor(public ks: KeycloakService) { }
  ngOnInit(): void {
    if (this.ks.isLoggedIn()) {
      this.ks.loadUserProfile().then(profile => { this.profile = profile })
    }
  }

  isMenuOpen = false;


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public onToggleSidenav = () => {

  }

  async handleLogin() {
    await this.ks.login({
      redirectUri: window.location.origin
    })
  }

  handleLogout() {
    this.ks.logout(window.location.origin);
  }
}
