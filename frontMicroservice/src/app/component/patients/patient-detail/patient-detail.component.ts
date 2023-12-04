import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Patient} from "../../../core/models/patient.model";
import {PatientService} from "../../../core/services/patient.service";
import {Notes} from "../../../core/models/notes.model";
import {NoteService} from "../../../core/services/notes.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit{


  patientId = -1;

  patient!: Patient;

  notes: Notes[] = [];
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private noteService: NoteService,
  ) {
  }
  ngOnInit(): void {
    this.route.url.subscribe((r: { path: string; }[]) => {
      if (r[1] && r[1].path) {
        this.patientId = Number.parseInt(r[1].path);
      }
      this.patientService.onePatient(this.patientId).subscribe(r => {this.patient = r;
        console.log(r)});
      this.noteService.patientNotes(this.patientId).subscribe(r => {this.notes = r;
        console.log(r); });

    });


  }

}
