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
import { UpdateItemComponent } from './DashboardAdmin/updateItems/update-item/update-item.component';
import { AuctionCardComponent } from './DashboardAdmin/Auction/auction-card/auction-card.component';


const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'signup' , component : SignupComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'admin/item' , component:PostItemsComponent},
    {path:'admin/item/:id' , component:UpdateItemComponent},
    {path:'admin/list',component:ListItemsComponent},
  ]
  },
  {path: 'Card',component:AuctionCardComponent},

  { path: 'not-found', component: Error404Component },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'  }, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
