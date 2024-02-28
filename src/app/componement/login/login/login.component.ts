import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthServiceService } from 'app/services/auth/auth-service.service';
import { UserStorageService } from 'app/services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  hidePassword = true;
  constructor(
    private fb : FormBuilder,
    private snackbar : MatSnackBar,
    private authService:AuthServiceService,
    private router : Router) {}

    ngOnInit(): void {
this.loginForm= this.fb.group({
  email: [null, [Validators.required]],
  password: [null, [Validators.required]],
    })
}

togglePasswordVisibility(){
  this.hidePassword = !this.hidePassword;
}

onSubmit():void{
  const username = this.loginForm.get("email")!.value;
  const password = this.loginForm.get("password")!.value;

this.authService.login(username,password).subscribe(
  (res :HttpResponse<any>)=>{
    if(UserStorageService.isAdminLogged()) {
      console.log("admiin logged in !!!!!!!!!!!!!!")
      this.router.navigateByUrl('');
    }
    else if ( UserStorageService.isCustumerLogged()){
      this.router.navigateByUrl('');

    }
  },(error: any)=>{
    this.snackbar.open('bad credentiels','ERROR',{duration:5000});
  }
)



}
}
