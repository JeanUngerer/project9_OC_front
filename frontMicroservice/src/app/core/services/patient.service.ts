import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {MyTransfersDTO, Transfer, TransferToSend} from "../models/transfer.model";
import {environment} from "../../../environments/environment";
import {Patient} from "../models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private  apiService: ApiService) { }

  myPatients(): Observable<Patient[]> {
    return this.apiService.get(`/${environment.apiPatient}/patient/patients`);
  }

  newPatient(newPatient: Patient){
    return this.apiService.put(`/${environment.apiPatient}/patient/create`, newPatient);
  }

}
