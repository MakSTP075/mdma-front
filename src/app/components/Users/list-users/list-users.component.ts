import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { AddUsersComponent } from '../add-users/add-users.component';
import { DeleteUsersComponent } from '../delete-users/delete-users.component';
import { EditUsersComponent } from '../edit-users/edit-users.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public korisnici: Korisnik[] | undefined;
  public editUser: Korisnik | undefined;
  public deleteUser!: Korisnik;
  public userSearch = '';

  constructor(
    private korisnikService: KorisnikService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getKorisnike();
  }

  public getKorisnike(): void {
    //document.getElementById('add-user-form')?.click();
    this.korisnikService.getKorisnike().subscribe(
      (response: Korisnik[]) => {
        this.korisnici = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUsersComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getKorisnike();
    });
  }
  openEditUserDialog(userData: Korisnik) {
    const dialogRef = this.dialog.open(EditUsersComponent, {
      data: userData
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getKorisnike();
    });
  }
  openDeleteUserDialog(userData: Korisnik) {
    const dialogRef = this.dialog.open(DeleteUsersComponent, {
      data: userData
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getKorisnike();
    });
  }



}
