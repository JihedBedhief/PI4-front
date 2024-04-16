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
import { PostItemsComponent } from './DashboardAdmin/PostItems/post-items/post-items.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { ListItemsComponent } from './DashboardAdmin/PostItems/post-items/allItems/list-items/list-items.component';
import { UpdateItemComponent } from './DashboardAdmin/updateItems/update-item/update-item.component';
import { DashboardComponent } from './DashboardAdmin/Dashboard/dashboard/dashboard.component';
import { ReclamationServicesComponent } from './componement/reclamation-services/reclamation-services.component';
import { PostReclamationComponent } from './componement/reclamation-services/PostReclamation/post-reclamation/post-reclamation.component';
import { UpdateReclamationComponent } from './componement/reclamation-services/Update/update-reclamation/update-reclamation.component';
import { IgxBadgeModule, IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxCheckboxModule, IgxIconModule, IgxInputGroupModule, IgxMaskModule, IgxRadioModule, IgxSelectModule, IgxStepperModule } from 'igniteui-angular';


import { MatDialogModule } from '@angular/material/dialog';
import { PostlistComponent } from './Forum/post/postlist/postlist.component';
import { CreatepostComponent } from './Forum/createpost/createpost/createpost.component';
import { CreatecommentComponent } from './Forum/createcomment/createcomment.component';
import { ListecommentComponent } from './Forum/listecomment/listecomment.component';
import { StatestiqueReclamationComponent } from './statestique-reclamation/statestique-reclamation.component';
import { ChatComponent } from './Forum/ChatRoom/chat/chat.component';
import { UsernameComponent } from './Forum/ChatRoom/username/username/username.component';

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
    ReclamationServicesComponent,
    PostReclamationComponent,
    UpdateReclamationComponent,
    PostlistComponent,
    CreatepostComponent,
    CreatecommentComponent,
    ListecommentComponent,
    StatestiqueReclamationComponent,
    ChatComponent,
    UsernameComponent,

  
    

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
    IgxStepperModule,
    IgxMaskModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRadioModule,
    IgxCardModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxIconModule,
    IgxBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    IgxButtonGroupModule,
    DemoAngularMaterialModule,
    HttpClientModule,
    MatDialogModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
