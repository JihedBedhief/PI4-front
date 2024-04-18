import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componement/home/home/home.component';
import { ContactComponent } from './componement/Contact/contact/contact.component';
import { CompanyCardComponent } from './componement/CompanyCard/company-card/company-card.component';
import { LoginComponent } from './componement/login/login/login.component';
import { InfoForumComponent } from './componement/Info/info-forum/info-forum.component';
import { Error404Component } from './componement/error404/error404/error404.component';
import { FrontOfficeComponent } from './componement/front-office/front-office/front-office.component';
import { SignupComponent } from './componement/signup/signup/signup.component';
import { PostSessionComponent } from './DashboardAdmin/PostSession/post-session/post-session.component';
import { ListSessionComponent } from './DashboardAdmin/PostSession/post-session/allSession/list-session/list-session.component';
import { ListReservationComponent } from './DashboardAdmin/reservation/ListReservation/list-reservation/list-reservation.component';
import { PostReservationComponent } from './DashboardAdmin/reservation/post-reservation/post-reservation.component';
import { PlaceComponent } from './DashboardAdmin/place/place.component';
import { FormStepperComponent } from './DashboardAdmin/form-stepper/form-stepper.component';
import { ListStandComponent } from './DashboardAdmin/list-stand/list-stand.component';
import { PackComponent } from './DashboardAdmin/pack/pack.component';
import { UpdateSessionComponent } from './DashboardAdmin/updateSession/update-session/update-session.component';
import { PackListComponent } from './DashboardAdmin/pack-list/pack-list.component';


const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'signup' , component : SignupComponent},
  {path:'dashboard/admin/session' , component:PostSessionComponent},
  {path:'session/:idsession' , component:UpdateSessionComponent},

  {path:'dashboard/admin/list',component:ListSessionComponent},
  {path:'reservation',component:ListReservationComponent},
  {path:'Add/reservation/:id' , component:PostReservationComponent},
  {path:'place' , component:PlaceComponent},
  {path:'forr' , component:FormStepperComponent},
  {path:'pack' , component:PackComponent},
  {path:'pack/List' , component:PackListComponent},


  
  {path:'standss/:idsessions/:idpack/:email' , component:ListStandComponent},

  { path: '**', component: Error404Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
