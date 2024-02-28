import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor( ){}
  ngOnInit(): void {
  //  if(this.ks.isLoggedIn()){
  //   this.ks.loadUserProfile().then(profile=>{this.profile=profile})
  //  }
  }
  
  isMenuOpen = false;

 public profile:any ;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public onToggleSidenav = () => { 

  }

  // async handleLogin(){
  //   await this.ks.login({
  //     redirectUri:window.location.origin
  //   })
  // }

  //  handleLogout(){
  //  this.ks.logout(window.location.origin);
  // }
}
