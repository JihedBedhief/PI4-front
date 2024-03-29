import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componement/home/home/home.component';
import { ContactComponent } from './componement/Contact/contact/contact.component';
import { CompanyCardComponent } from './componement/CompanyCard/company-card/company-card.component';
import { LoginComponent } from './componement/login/login/login.component';
import { InfoForumComponent } from './componement/Info/info-forum/info-forum.component';
import { Error404Component } from './componement/error404/error404/error404.component';
import { FrontOfficeComponent } from './componement/front-office/front-office/front-office.component';
import { ListApplicationsComponent } from './componement/list-applications/list-applications.component';
import { DetailsApplicationComponent } from './componement/details-application/details-application.component';
import { AddApplicationComponent } from './componement/add-application/add-application.component';
import { ListOffersComponent } from './componement/list-offers/list-offers.component';
import { DetailsOfferComponent } from './componement/details-offer/details-offer.component';
import { QuizComponent } from './componement/quiz/quiz.component';
import { UpdateApplicationComponent } from './componement/update-application/update-application.component';
import { StatisticsComponent } from './componement/statistics/statistics.component';
import { ScheduleInterviewComponent } from './componement/schedule-interview/schedule-interview.component';
import { ListInterviewsComponent } from './componement/list-interviews/list-interviews.component';


const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact' , component : ContactComponent},
  { path : 'exposant', component : CompanyCardComponent },
  { path : 'login' , component : LoginComponent},
  {path:'appList',component:ListApplicationsComponent},
  {path:'offerList',component:ListOffersComponent},
  {path:'quiz',component:QuizComponent},
  { path: 'application-details/:codeCandidature', component: DetailsApplicationComponent },
  { path: 'scheduleInterview/:id', component: ScheduleInterviewComponent },
  {path:'interviewList',component:ListInterviewsComponent},
  { path: 'offerDetails', component: DetailsOfferComponent },
  {path:'addApp',component:AddApplicationComponent},
  { path: 'editApp/:id', component: UpdateApplicationComponent },
  {path:'stat',component:StatisticsComponent},
  { path : 'info-pratiques' , component : InfoForumComponent},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
