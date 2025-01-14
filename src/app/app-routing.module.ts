import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componement/Contact/contact/contact.component';
import { CompanyCardComponent } from './componement/CompanyCard/company-card/company-card.component';
import { LoginComponent } from './componement/login/login/login.component';
import { InfoForumComponent } from './componement/Info/info-forum/info-forum.component';
import { Error404Component } from './componement/error404/error404/error404.component';
import { FrontOfficeComponent } from './componement/front-office/front-office/front-office.component';
import { SignupComponent } from './componement/signup/signup.component';

// import { GuardGuard } from './guards/guard.guard';
// ,canActivate:[AuthGuard] ,data:{roles:['ADMIN']}

const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent},
  { path : 'signup' , component : SignupComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path: '**', component: Error404Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
