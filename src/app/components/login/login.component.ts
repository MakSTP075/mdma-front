import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  users: Korisnik [] = []
  constructor(private formBuilder: FormBuilder, private userService: KorisnikService, private router: RouterLink) { }

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.users$.subscribe(value => {this.users = value})
    this.userForm = this.formBuilder.group({        // gdje ovaj user form putuje
      email: [''],
      password: [''],
    })

}
onSubmit() {
for( var i = 0; i<this.users.length; i++) {
  if (this.userForm.controls["email"].value == this.users[i].email) {
      if (this.users[i].isAdmin == true)
        this.userService.setAdmin(true)
  }

}
}}


