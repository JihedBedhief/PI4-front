import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakrestapiService } from 'app/services/KeycloakApi/keycloakrestapi.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoModalComponent } from '../user-info-modal/user-info-modal.component'; 
import { UserInfoComponent } from '../user-info/user-info.component';
import { CustomFormComponent } from '../CustomFormComponent/custom-form/custom-form.component';


@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.css']
})
export class RoleSelectionComponent {

  public profile: any;
  selectedOption: string = '';
  roles: string[] = ['STUDENT', 'TEACHER', 'ALUMNI', 'COMPANY', 'FINANCIALMANAGER', 'SUPPLIER'];

  constructor(
    private keycloakService: KeycloakService, 
    private router: Router, 
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.profile = await this.keycloakService.loadUserProfile();
    } else {
      // Optionally handle not logged in state, e.g.,redirect to login
      console.warn("User not logged in");
    }
  }
  refreshpage(){
    location.reload();
  }

  onChange(event: any) {
    this.selectedOption = event.target.value;
    if (this.selectedOption) {
      console.log('Selected role:', this.selectedOption);
      this.openRoleBasedForm(this.selectedOption);
    }
  }

  openRoleBasedForm(role: string) {
    const dialogRef = this.dialog.open(CustomFormComponent, {
      width: '600px',
      data: { role: role, profile: this.profile }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      
      // Navigate based on the selected role
    });
  }

}

 /* AddRoleToUser(selectedOption: string, username: string) {
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

*/