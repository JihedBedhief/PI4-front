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
import { ReclamationServicesComponent } from './componement/reclamation-services/reclamation-services.component';
import { PostReclamationComponent } from './componement/reclamation-services/PostReclamation/post-reclamation/post-reclamation.component';
import { UpdateReclamationComponent } from './componement/reclamation-services/Update/update-reclamation/update-reclamation.component';
import { PostlistComponent } from './Forum/post/postlist/postlist.component';
import { CreatecommentComponent } from './Forum/createcomment/createcomment.component';
import { ListecommentComponent } from './Forum/listecomment/listecomment.component';
import { StatestiqueReclamationComponent } from './statestique-reclamation/statestique-reclamation.component';




const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path : 'signup' , component : SignupComponent},
  {path:'dashboard/admin/item' , component:PostItemsComponent},
  {path:'dashboard/admin/list',component:ListItemsComponent},
  { path: 'not-found', component: Error404Component },
  { path : 'reclamation' , component : ReclamationServicesComponent},
  { path : 'addreclamation' , component : PostReclamationComponent},
  { path: 'updatereclamation/:id', component: UpdateReclamationComponent },
  { path: 'getidtocomment/:id', component: CreatecommentComponent },
  { path: 'comments/:postId', component: ListecommentComponent },

  { path: 'post', component: PostlistComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'rec',component:StatestiqueReclamationComponent},

  { path: '**', redirectTo: 'not-found', pathMatch: 'full'  }, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
