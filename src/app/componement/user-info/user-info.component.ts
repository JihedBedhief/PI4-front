import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'app/services/user/user-info.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userId!: string ;
  user: any = {
    id:this.userId,
    phoneNumber:'',
    adress:''
  };
  constructor(private userService: UserInfoService, private keycloakService: KeycloakService) { }


  async ngOnInit() {
    this.userId = await this.getUserId();
    this.loadUser();
    this.GetAllRolesNames();
  }

  async loadUser() {
    this.user = this.userService.getUser(this.userId).subscribe(data=>{
      this.user= data;
      console.log("USEEEEER INFFFOOOOOO "+this.user.id)
    });
  }

  GetAllRolesNames(){
    this.userService.getRoles().subscribe((res)=>{  
  res.forEach((element: any) => {
    console.log(element)
  });
  })
}

  async saveUser() {
    this.userService.addUser(this.user).subscribe(data=>{
      console.log(data);
    });
    
  }


  async getUserId() {
    const userDetails = await this.keycloakService.loadUserProfile();
    return userDetails.id || '';
  }
}
