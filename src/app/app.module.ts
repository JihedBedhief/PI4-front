import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
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


import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserInfoComponent } from './componement/user-info/user-info.component';
import { AdminKeycloakComponent } from './componement/admin-keycloak/admin-keycloak.component';
import { RoleSelectionComponent } from './componement/role-selection/role-selection.component';
import { MatSelectModule } from '@angular/material/select';
import { StudentInfoPageComponent } from './componement/student-info-page/student-info-page.component';
import { TeacherInfoPageComponent } from './componement/teacher-info-page/teacher-info-page.component';
import { CompanyInfoPageComponent } from './componement/company-info-page/company-info-page.component';
import { AlumniInfoPageComponent } from './componement/alumni-info-page/alumni-info-page.component';
import { UserInfoModalComponent } from './componement/user-info-modal/user-info-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { UserUpdateComponent } from './componement/user-update/user-update.component';
import { ResumeFormComponent } from './componement/resume-form/resume-form.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'Pi-Dev',
        clientId: 'pidev-client-ang'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}

import { SignupComponent } from './componement/signup/signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostItemsComponent } from './DashboardAdmin/PostItems/post-items/post-items.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { ListItemsComponent } from './DashboardAdmin/PostItems/post-items/allItems/list-items/list-items.component';
import { UpdateItemComponent } from './DashboardAdmin/updateItems/update-item/update-item.component';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { AuctionCardComponent } from './DashboardAdmin/Auction/auction-card/auction-card.component';
import { AddBidComponent } from './DashboardAdmin/Bid/AddBid/add-bid/add-bid.component';
import { ListBidComponent } from './DashboardAdmin/Bid/ListBid/list-bid/list-bid.component';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environment/environment';
import { CardItemsComponent } from './DashboardAdmin/PostItems/post-items/CardItems/card-items/card-items.component';
import { CountdownTimerComponent } from './DashboardAdmin/Auction/auction-card/countdown-timer/countdown-timer/countdown-timer.component';
import { BidDetailsComponent } from './DashboardAdmin/Bid/BidDetails/bid-details/bid-details.component';
import { ChatComponent } from './DashboardAdmin/chat/chat/chat.component';
import { DeviListComponent } from './DashboardAdmin/Devi/DeviList/devi-list/devi-list.component';
import { AddDeviComponent } from './DashboardAdmin/Devi/AddDevi/add-devi/add-devi.component';
initializeApp(environment.firebaseConfig);

//I keep the new line

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CompanyCardComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    InfoForumComponent,
    LoginComponent,
    FrontOfficeComponent,
    Home2Component,
    SliderComponent,
    ForumComponent,
    UserInfoComponent,
    AdminKeycloakComponent,
    RoleSelectionComponent,
    StudentInfoPageComponent,
    TeacherInfoPageComponent,
    CompanyInfoPageComponent,
    AlumniInfoPageComponent,
    UserInfoModalComponent,
    UserUpdateComponent,
    ResumeFormComponent,
    SignupComponent,
    Error404Component,
    PostItemsComponent,
    ListItemsComponent,
    UpdateItemComponent,
    AuctionCardComponent,
    AddBidComponent,
    ListBidComponent,
    CardItemsComponent,
    CountdownTimerComponent,
    BidDetailsComponent,
    ChatComponent,
    DeviListComponent,
    AddDeviComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    DropDownListModule,
    DemoAngularMaterialModule,
    ScrollSpyModule,

  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
