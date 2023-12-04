import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {PatientService} from "../../core/services/patient.service";
import {ContactService} from "../../core/services/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {AuthService} from "../../core/services/auth.service";
import {Patient} from "../../core/models/patient.model";

@Component({
  selector: 'app-transfer',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit{

  submitted = false;
  patients: Patient[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'phone'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Patient>(this.patients);

  myUsername = '';


  constructor(

    private patientService: PatientService,
    private contactService: ContactService,
    private userService: UserService,

    private authService: AuthService,
  ) {}

  ngOnInit(): void {
      this.refreshPatientsList();

      this.authService.getUsername().subscribe({next: name => name? this.myUsername = name : this.myUsername = "notAuthenticated"});
  }


  refreshPatientsList(){
    this.patientService.myPatients().subscribe({
      next:(r) => {
        console.log("RESULT : ", r);
        this.patients = r;
        this.dataSource = new MatTableDataSource<Patient>(this.patients);
        },
      error:(err) => console.log("ERROR : ", err)}
    );
  }


}
