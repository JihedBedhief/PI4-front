import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ReactiveFormsModule } from '@angular/forms';
import { PostItemsComponent } from './DashboardAdmin/PostItems/post-items/post-items.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { ListItemsComponent } from './DashboardAdmin/PostItems/post-items/allItems/list-items/list-items.component';
import { UpdateItemComponent } from './DashboardAdmin/updateItems/update-item/update-item.component';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { DashboardComponent } from './DashboardAdmin/Dashboard/dashboard/dashboard.component';
import { AddFormComponent } from './componement/add-form/add-form.component';
import { FormComponent } from './componement/formoffre/form.component';
import { OfferCardComponent } from './componement/offer-card/offer-card.component';
import { DetailsoffreComponent } from './componement/detailsoffre/detailsoffre.component';
import { EditFormComponent } from './componement/edit-form/edit-form.component';


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
    PostItemsComponent,
    ListItemsComponent,
    UpdateItemComponent,
    DashboardComponent,
    AddFormComponent,
    FormComponent,
    OfferCardComponent,
    DetailsoffreComponent,
    EditFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    DemoAngularMaterialModule,
    HttpClientModule,
    ScrollSpyModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
