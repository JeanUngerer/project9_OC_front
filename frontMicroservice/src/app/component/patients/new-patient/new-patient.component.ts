import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../../core/services/patient.service";
import {Adresse, Patient} from "../../../core/models/patient.model";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent {

  constructor(
    private patientService: PatientService,
  ) {
  }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthdate: new FormControl(Date.now()),
    genra: new FormControl(''),
    adresse: new FormGroup({
      number: new FormControl(null),
      street: new FormControl(''),
    }),
    phone: new FormControl(''),
  });

  save(){
    if(!this.form.valid){
      return;
    }
    // Create Adresse object
    const adresse: Adresse = {
        // @ts-ignore
      id: null,
        // @ts-ignore
      number: this.form.get('adresse.number').value,
      // @ts-ignore
      street: this.form.get('adresse.street').value
    };
    // Create Patient object
    const patient: Patient = {
      // @ts-ignore
      id: null,
      // @ts-ignore
      firstName: this.form.get('firstName').value,
      // @ts-ignore
      lastName: this.form.get('lastName').value,
      // @ts-ignore
      birthdate: new Date(this.form.get('birthdate').value),
      // @ts-ignore
      genra: this.form.get('genra').value,
      // @ts-ignore
      adresse: adresse,
      // @ts-ignore
      phone: this.form.get('phone').value,
    };
    this.patientService.newPatient(patient).subscribe(r => console.log(r));
  }
}
