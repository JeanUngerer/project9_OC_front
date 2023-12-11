import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Notes} from "../models/notes.model";
import {environment} from "../../../environments/environment";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DangerService {

  constructor(private  apiService: ApiService) { }


  patientRisk(patientID: number): Observable<string> {
    return this.apiService.get(`/${environment.apiDanger}/status/${patientID}`);
  }
}
