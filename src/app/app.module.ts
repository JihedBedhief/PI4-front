import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componement/navbar/navbar.component';
import { FooterComponent } from './componement/footer/footer/footer.component';
import { CardComponent } from './componement/Card/card/card.component';
import { CompanyCardComponent } from './componement/CompanyCard/company-card/company-card.component';
import { ContactComponent } from './componement/Contact/contact/contact.component';
import { HomeComponent } from './componement/home/home/home.component';
import { InfoForumComponent } from './componement/Info/info-forum/info-forum.component';
import { FrontOfficeComponent } from './componement/front-office/front-office/front-office.component';
import { Home2Component } from './componement/home2/home2/home2.component';
import { SliderComponent } from './componement/Slider/slider/slider.component';
import { ForumComponent } from './componement/form/forum/forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    DropDownListModule

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
