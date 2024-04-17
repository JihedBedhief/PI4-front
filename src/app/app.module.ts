import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
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
import { SignupComponent } from './componement/signup/signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostSessionComponent } from './DashboardAdmin/PostSession/post-session/post-session.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { ListSessionComponent } from './DashboardAdmin/PostSession/post-session/allSession/list-session/list-session.component';
import { UpdateSessionComponent } from './DashboardAdmin/updateSession/update-session/update-session.component';
import { CommonModule, DatePipe } from '@angular/common';
import { PostReservationComponent } from './DashboardAdmin/reservation/post-reservation/post-reservation.component';
import { ListReservationComponent } from './DashboardAdmin/reservation/ListReservation/list-reservation/list-reservation.component';
import { PlaceComponent } from './DashboardAdmin/place/place.component';
import { FormStepperComponent } from './DashboardAdmin/form-stepper/form-stepper.component';
import { ListStandComponent } from './DashboardAdmin/list-stand/list-stand.component';
import { PackComponent } from './DashboardAdmin/pack/pack.component';
import { ConfirmationDialogComponent } from './DashboardAdmin/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    SignupComponent,
    Error404Component,
    PostSessionComponent,
    ListSessionComponent,
    UpdateSessionComponent,
    PostReservationComponent,
    ListReservationComponent,
    PlaceComponent,
    FormStepperComponent,
    ListStandComponent,
    PackComponent,
    ConfirmationDialogComponent,

  ],
  
  imports: [
    BrowserModule,
    MatStepperModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
   DemoAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule, // Import CommonModule here
    MatDialogModule,
  ],
  providers: [    DatePipe // Add DatePipe to the providers array
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
