import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { NavbarComponent } from './componement/navbar/navbar.component';
import { FooterComponent } from './componement/footer/footer/footer.component';
import { CardComponent } from './componement/Card/card/card.component';
import { CompanyCardComponent } from './componement/CompanyCard/company-card/company-card.component';
import { ContactComponent } from './componement/Contact/contact/contact.component';
import { Error404Component } from './componement/error404/error404/error404.component';
import { HomeComponent } from './componement/home/home/home.component';
import { InfoForumComponent } from './componement/Info/info-forum/info-forum.component';
import { LoginComponent } from './componement/login/login/login.component';
import { FrontOfficeComponent } from './componement/front-office/front-office/front-office.component';
import { Home2Component } from './componement/home2/home2/home2.component';
import { SliderComponent } from './componement/Slider/slider/slider.component';
import { ForumComponent } from './componement/form/forum/forum.component';
import { ListApplicationsComponent } from './componement/list-applications/list-applications.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsApplicationComponent } from './componement/details-application/details-application.component';
import { AddApplicationComponent } from './componement/add-application/add-application.component';
import { UpdateApplicationComponent } from './componement/update-application/update-application.component';
import { ListOffersComponent } from './componement/list-offers/list-offers.component';
import { DetailsOfferComponent } from './componement/details-offer/details-offer.component';
import { QuizComponent } from './componement/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './componement/statistics/statistics.component';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { ScorePopupComponent } from './componement/score-popup/score-popup.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CompanyCardComponent,
    ContactComponent,
    Error404Component,
    FooterComponent,
    HomeComponent,
    InfoForumComponent,
    LoginComponent,
    FrontOfficeComponent,
    Home2Component,
    SliderComponent,
    ForumComponent,
    ListApplicationsComponent,
    DetailsApplicationComponent,
    AddApplicationComponent,
    UpdateApplicationComponent,
    ListOffersComponent,
    DetailsOfferComponent,
    QuizComponent,
    StatisticsComponent,
    ScorePopupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
