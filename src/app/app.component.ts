import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakrestapiService } from './services/KeycloakApi/keycloakrestapi.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiDev';
  public profile!: KeycloakProfile;
 
  constructor(private keycloakApi :KeycloakrestapiService ,private ks:KeycloakService){
  }
}
