import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(
    private korisnikService: KorisnikService,
    public dialogRef: MatDialogRef<AddUsersComponent>
  ) { }

  ngOnInit(): void {
  }
  public onAddUser(addForm: NgForm): void{
    this.korisnikService.addKorisnik(addForm.value).subscribe(
      (response: Korisnik) => {
        this.closeDialog();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
