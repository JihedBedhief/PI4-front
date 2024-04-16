import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { UserInfoComponent } from './componement/user-info/user-info.component';
import { AdminKeycloakComponent } from './componement/admin-keycloak/admin-keycloak.component';
import { RoleSelectionComponent } from './componement/role-selection/role-selection.component';
import { StudentInfoPageComponent } from './componement/student-info-page/student-info-page.component';
import { TeacherInfoPageComponent } from './componement/teacher-info-page/teacher-info-page.component';
import { CompanyInfoPageComponent } from './componement/company-info-page/company-info-page.component';
import { AlumniInfoPageComponent } from './componement/alumni-info-page/alumni-info-page.component';
import { UserUpdateComponent } from './componement/user-update/user-update.component';

 
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
import { UpdateItemComponent } from './DashboardAdmin/updateItems/update-item/update-item.component';
import { AuctionCardComponent } from './DashboardAdmin/Auction/auction-card/auction-card.component';
import { ListBidComponent } from './DashboardAdmin/Bid/ListBid/list-bid/list-bid.component';
import { CardItemsComponent } from './DashboardAdmin/PostItems/post-items/CardItems/card-items/card-items.component';
import { ChatComponent } from './DashboardAdmin/chat/chat/chat.component';
import { DeviListComponent } from './DashboardAdmin/Devi/DeviList/devi-list/devi-list.component';
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
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'UserInfo' , component : UserInfoComponent,canActivate:[AuthGuard]},
  { path : 'adminKeyCloak' , component : AdminKeycloakComponent,canActivate:[AuthGuard] ,data:{roles:['ADMIN']}},
  { path : 'student-page' , component : StudentInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'teacher-page' , component : TeacherInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'company-page' , component : CompanyInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'alumni-page' , component : AlumniInfoPageComponent,canActivate:[AuthGuard]},
  { path : 'chooseRole' , component : RoleSelectionComponent,canActivate:[AuthGuard]},
  { path : 'updateProfile' , component : UserUpdateComponent,canActivate:[AuthGuard]},
  { path : 'login' , component : LoginComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'signup' , component : SignupComponent},
 
    { path:'Items',component:ListItemsComponent},
    { path: 'Bid' , component : ListBidComponent},

  
  {path: 'Card',component:AuctionCardComponent},
  {path: 'i',component:CardItemsComponent},
  {path: 'chat',component:ChatComponent},
  {path: 'devi',component:DeviListComponent},




 
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
  {path: 'detailoffer/:reference',component:DetailsoffreComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: 'not-found', component: Error404Component },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'  }, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
