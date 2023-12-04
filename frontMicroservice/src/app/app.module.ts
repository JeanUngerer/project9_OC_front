import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TopNavComponent } from './component/layout/top-nav/top-nav.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { HomeComponent } from './component/home/home.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { UserInfoComponent } from './component/user-info/user-info.component';
import { PatientsComponent } from './component/patients/patients.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { NgSelectModule } from '@ng-select/ng-select';
import { GithubCallbackComponent } from './component/login/providerCallbacks/github-callback/github-callback.component';
import { GoogleCallbackComponent } from './component/login/providerCallbacks/google-callback/google-callback.component';
import { NewPatientComponent } from './component/patients/new-patient/new-patient.component';
import { PatientDetailComponent } from './component/patients/patient-detail/patient-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavComponent,
    ErrorMessageComponent,
    HomeComponent,
    UserInfoComponent,
    PatientsComponent,
    ContactsComponent,
    RegistrationComponent,
    GithubCallbackComponent,
    GoogleCallbackComponent,
    NewPatientComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
