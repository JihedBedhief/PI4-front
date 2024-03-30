import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakrestapiService } from 'app/services/KeycloakApi/keycloakrestapi.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-role-selection',
  templateUrl:'./role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent {


  public profile!: KeycloakProfile;
  constructor(private keycloakApi: KeycloakrestapiService, public ks: KeycloakService, private route: Router) { }


  ngOnInit() {
    this.keycloakApi.getAllRolesByNames().subscribe((data) => { console.log(data) });
    if (this.ks.isLoggedIn()) {
      this.ks.loadUserProfile().then(profile => { this.profile = profile })
    }
  }

  selectedOption!: string;
  roleSelected: boolean = false;

  options = [
    'STUDENT',
    'TEACHER',
    'ALUMNI',
    'COMPANY'
  ];

  roleRoutes = {
    'STUDENT': '/student-page',
    'TEACHER': '/teacher-page',
    'COMPANY': '/company-page',
    'ALUMNI': '/alumni-page'
  };


  onChange(event: any) {
    this.selectedOption = event.value;
    if (this.ks.isLoggedIn()) {
      let username = this.profile.username;
      if (this.selectedOption) {
        this.AddRoleToUser(this.selectedOption, username!);
        this.roleSelected = true;
        this.route.navigate([this.roleRoutes[this.selectedOption as keyof typeof this.roleRoutes]]);
      } else {
        console.warn("Selectedoption is undefined");
      }
    } else {
      console.warn("User not logged in");
      // Handle not logged in state, e.g.,redirect to login
    }
  }


  AddRoleToUser(selectedOption: string, username: string) {
    this.keycloakApi.AddRoleToUser(selectedOption, username).subscribe(
      data => {
        console.log(data);
      },
      error => {
        if (error.status === 500) {
          console.log(error);

        } else {
          console.log(error);

        }
      }

    );
  }


}
