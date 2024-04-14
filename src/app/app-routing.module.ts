import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componement/Contact/contact/contact.component';
import { CompanyCardComponent } from './componement/CompanyCard/company-card/company-card.component';
import { LoginComponent } from './componement/login/login/login.component';
import { InfoForumComponent } from './componement/Info/info-forum/info-forum.component';
import { Error404Component } from './componement/error404/error404/error404.component';
import { FrontOfficeComponent } from './componement/front-office/front-office/front-office.component';
import { AuthGuard } from './guards/auth.guard';
import { UserInfoComponent } from './componement/user-info/user-info.component';
import { AdminKeycloakComponent } from './componement/admin-keycloak/admin-keycloak.component';
import { RoleSelectionComponent } from './componement/role-selection/role-selection.component';
import { StudentInfoPageComponent } from './componement/student-info-page/student-info-page.component';
import { TeacherInfoPageComponent } from './componement/teacher-info-page/teacher-info-page.component';
import { CompanyInfoPageComponent } from './componement/company-info-page/company-info-page.component';
import { AlumniInfoPageComponent } from './componement/alumni-info-page/alumni-info-page.component';
import { UserUpdateComponent } from './componement/user-update/user-update.component';

 


const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent,canActivate:[AuthGuard] ,data:{roles:['ADMIN']}},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'UserInfo' , component : UserInfoComponent,canActivate:[AuthGuard]},
  { path : 'adminKeyCloak' , component : AdminKeycloakComponent,canActivate:[AuthGuard] ,data:{roles:['ADMIN']}},
  { path : 'student-page' , component : StudentInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'teacher-page' , component : TeacherInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'company-page' , component : CompanyInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'alumni-page' , component : AlumniInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'chooseRole' , component : RoleSelectionComponent,canActivate:[AuthGuard]},
  { path : 'updateProfile' , component : UserUpdateComponent,canActivate:[AuthGuard]},
  { path: '**', component: Error404Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
