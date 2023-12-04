import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {MyTransfersDTO, Transfer, TransferToSend} from "../models/transfer.model";
import {environment} from "../../../environments/environment";
import {Patient} from "../models/patient.model";
import {Notes} from "../models/notes.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private  apiService: ApiService) { }

  patientNotes(patientID: number): Observable<Notes[]> {
    return this.apiService.get(`/${environment.apiNotes}/patient/${patientID}`);
  }

  newNote(newNote: Notes): Observable<Notes>{
    return this.apiService.put(`/${environment.apiNotes}/create`, newNote);
  }

  oneNote(id: number): Observable<Notes>{
    return this.apiService.get(`/${environment.apiNotes}/${id}`);
  }

}
