import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css'],
})
export class EditUsersComponent implements OnInit {
  constructor(
    private korisnikService: KorisnikService,
    public dialogRef: MatDialogRef<EditUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public editUser: Korisnik
  ) {}

  ngOnInit(): void {}

  public onUpdateUser(user: Korisnik): any {
    this.korisnikService.updateKorisnik(user).subscribe(
      () => {
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
