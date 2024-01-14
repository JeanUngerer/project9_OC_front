import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {AppComponent} from "./app.component";
import {UserInfoComponent} from "./component/user-info/user-info.component";
import {PatientsComponent} from "./component/patients/patients.component";
import {ContactsComponent} from "./component/contacts/contacts.component";
import {RegistrationComponent} from "./component/registration/registration.component";
import {NewPatientComponent} from "./component/patients/new-patient/new-patient.component";
import {PatientDetailComponent} from "./component/patients/patient-detail/patient-detail.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserInfoComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'contact',
    component: ContactsComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'newPatient',
    component: NewPatientComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'patient/:id',
    component: PatientDetailComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
