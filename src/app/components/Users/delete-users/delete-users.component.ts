import { HttpErrorResponse } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  constructor(private korisnikService: KorisnikService,
    public dialogRef: MatDialogRef<DeleteUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public deleteUser: Korisnik
    ) { }

  ngOnInit(): void {
  }

  public onDeleteUser(userId: number): void {
    this.korisnikService.deleteKorisnik(userId).subscribe(
      (response: void) => {
        this.closeDialog()
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
