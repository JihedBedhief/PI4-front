import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakrestapiService } from 'app/services/KeycloakApi/keycloakrestapi.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoModalComponent } from '../user-info-modal/user-info-modal.component'; 


@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent {


  public profile!: KeycloakProfile;
  constructor(private keycloakApi: KeycloakrestapiService, public ks: KeycloakService, private route: Router,public dialog: MatDialog) { }


  async ngOnInit() {


    if (this.ks.isLoggedIn()) {
      this.profile = await this.ks.loadUserProfile();
      this.getRolesUser1();
    }
  }

  selectedOption!: string;
  roleSelected: boolean = false;
  roles: string[] = [];
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
        this.openUserInfoModal();
        //this.route.navigate([this.roleRoutes[this.selectedOption as keyof typeof this.roleRoutes]]);
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

  getRolesUser1() {
    if (this.ks.isLoggedIn()) {  // Make sure isLoggedIn is awaited if it returns a Promise
      const username = this.profile.username;
      this.keycloakApi.getUserRoles(username!).subscribe(userroles => {
        this.roles = userroles;
        
        // New logic to check if the user has one of the roles and select it
        const matchingRole = userroles.find(role => this.options.includes(role));
        if (matchingRole) {
          // User has one of the roles; pre-select it in the dropdown
          this.selectedOption = matchingRole;
          this.roleSelected = true;  // Assuming you want to disable selection if the user has a role
        }
        
        console.log('User roles: ' + userroles);
      });
    }
  }
  
  getRolesUser() {
    if (this.ks.isLoggedIn()) {
      let username = this.profile.username;
      this.keycloakApi.getUserRoles(username!)
        .subscribe(userroles => {
          this.roles = userroles;
          console.log('taaaaaaaaaaaaaab roles' + this.roles);
          console.log("User roles are :" + userroles);
        })
    }
  }



  openUserInfoModal() {
    const dialogRef = this.dialog.open(UserInfoModalComponent, {
      width: '900px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Optionally do something with the form data result here
    });
  }
  

}
