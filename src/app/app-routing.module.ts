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
import { PostItemsComponent } from './DashboardAdmin/PostItems/post-items/post-items.component';
import { ListItemsComponent } from './DashboardAdmin/PostItems/post-items/allItems/list-items/list-items.component';
import { DashboardComponent } from './DashboardAdmin/Dashboard/dashboard/dashboard.component';
import { AddFormComponent } from './componement/add-form/add-form.component';
import { CardComponent } from './componement/Card/card/card.component';
import { FormComponent } from './componement/formoffre/form.component';
import { EditFormComponent } from './componement/edit-form/edit-form.component';
import { OfferCardComponent } from './componement/offer-card/offer-card.component';
import { DetailsoffreComponent } from './componement/detailsoffre/detailsoffre.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path: 'edit-form/:reference', component: EditFormComponent },
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'signup' , component : SignupComponent},
  { path : 'card' , component : CardComponent},
  {path:'dashboard/admin/item' , component:PostItemsComponent},
  {path:'dashboard/admin/list',component:ListItemsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'form',component:FormComponent},
  {path: 'add-form',component:AddFormComponent},
  {path: 'offercard',component:OfferCardComponent},
  {path: 'detailoffer',component:DetailsoffreComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: 'not-found', component: Error404Component },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'  }, 





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
