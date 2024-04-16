import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'app/services/user/user-info.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  Exist:boolean=false;
  profile! :KeycloakProfile ;
  userId!: string;
  user: any = {
    id: '',
    phoneNumber: '',
    adress: ''
  };
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  constructor(private userService: UserInfoService, private keycloakService: KeycloakService) { }


  async ngOnInit() {
    if (this.keycloakService.isLoggedIn()) {
      this.profile = await this.keycloakService.loadUserProfile();
    }
  
    this.loadUser();
    this.GetAllRolesNames();
  }

   loadUser() {
    if (this.keycloakService.isLoggedIn()) {
      let id = this.profile.id;
    this.user = this.userService.getUser(id!).subscribe(data=>{
      this.user= data;
      this.Exist=true;
     console.log(data)
    });
  }
}

  GetAllRolesNames() {
    this.userService.getRoles().subscribe((res) => {
      res.forEach((element: any) => {
        console.log(element)
      });
    })
  }


  saveUser() {
    if (this.keycloakService.isLoggedIn()) {
      let id= this.profile.id;
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('img', this.selectedFile as Blob);
    }
    formData.append('phoneNumber', this.user.phoneNumber);
    formData.append('adress', this.user.adress);
    formData.append('id',id!);
    console.log(formData);
    this.userService.addUser(formData).subscribe(data => {
      console.log(data);
    });
  }
}


  async getUserId() {
     await this.keycloakService.loadUserProfile(true).then(data => {
      this.profile =data})
   
    return this.profile.id;
  }


  previewImage(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
}
