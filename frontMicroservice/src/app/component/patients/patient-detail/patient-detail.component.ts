import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Patient} from "../../../core/models/patient.model";
import {PatientService} from "../../../core/services/patient.service";
import {Notes} from "../../../core/models/notes.model";
import {NoteService} from "../../../core/services/notes.service";
import {ContactService} from "../../../core/services/contact.service";
import {UserService} from "../../../core/services/user.service";
import {AuthService} from "../../../core/services/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NewNoteModalComponent} from "../new-note-modal/new-note-modal.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DangerService} from "../../../core/services/danger.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit{

  submitted = false;
  notes: Notes[] = [];
  displayedColumns: string[] = ['author', 'date', 'object'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Notes>(this.notes);

  myUsername = '';
  patientId = -1;

  patient!: Patient;

  patientRisk = "0";

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private noteService: NoteService,
    private contactService: ContactService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private dangerService: DangerService,
  ) {
  }
  ngOnInit(): void {
    this.route.url.subscribe((r: { path: string; }[]) => {
      if (r[1] && r[1].path) {
        this.patientId = Number.parseInt(r[1].path);
      }
      this.patientService.onePatient(this.patientId).subscribe(r => {this.patient = r;
        console.log(r)});
      this.refreshNotesList();
      this.refreshPatientRisk();

    });
    this.authService.getUsername().subscribe({next: name => name? this.myUsername = name : this.myUsername = "notAuthenticated"});
  }

  refreshNotesList(){
    this.noteService.patientNotes(this.patientId).subscribe({
      next:(r) => {
        console.log("RESULT : ", r);
        this.notes = r;
        this.dataSource = new MatTableDataSource<Notes>(this.notes);
      },
      error:(err) => console.log("ERROR : ", err)}
    );
  }

  refreshPatientRisk(){
    this.dangerService.patientRisk(this.patientId).subscribe({
      next:(r) => {
        console.log("RESULT RISK : ", r);
        this.patientRisk = r.status;

      },
      error:(err) => console.log("ERROR RISK : ", err)}
    );
  }

  handleClickRow(n: Notes){
    if (n._id) {
      this.router.navigate([`notes/${n._id}`]);
    }
  }


  newNote(): void {
    const dialogConfig = new MatDialogConfig();

    let machineTypeCompo;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.width = '60em';
    dialogConfig.height = '40em';
    dialogConfig.data = {patientId: this.patientId, content: null};

    const dialogRef = this.dialog.open(
      NewNoteModalComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((note) => {
      const notes: Notes = {_id: null, note: note, patientId: this.patientId, dateTime: null}
      if (note){
        this.noteService.newNote(notes).subscribe(res => {
          this.refreshNotesList();
          this.refreshPatientRisk();
        })
      }
    });

  }

}
