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
  options = [
    'STUDENT',
    'TEACHER',
    'ALUMNI',
    'COMPANY'
  ];
roles =[];
  constructor(private keycloakApi :KeycloakrestapiService ,private ks:KeycloakService){
  }

  ngOnInit() {
    if (this.ks.isLoggedIn()) {
      this.ks.loadUserProfile().then(profile => { this.profile = profile })
      this.keycloakApi.getUserRoles(this.profile?.username as string).subscribe(data=>{
       console.log(data)
    })
  }


  }

}
