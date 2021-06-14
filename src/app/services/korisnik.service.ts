import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Korisnik } from '../models/korisnik';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class KorisnikService{
    private apiServiceUrl = environment.apiBaseUrl;

    private _users = new BehaviorSubject<Korisnik[]> ([])
    users$ = this._users.asObservable()

    private _isAdmin = new BehaviorSubject<boolean> (false)
     isAdmin= this._isAdmin.asObservable()


    constructor(private http: HttpClient ) {}

    public getKorisnike(): Observable<Korisnik[]>{
        return this.http.get<Korisnik[]>(`${this.apiServiceUrl}users/getAll`);
    }

    public setKorisnike(a: Korisnik[]){
      this._users.next(a);
    }

    public addKorisnik(user: Korisnik): Observable<Korisnik>{
        return this.http.post<Korisnik>(`${this.apiServiceUrl}user/register`, user);
    }

    public updateKorisnik(user: Korisnik): Observable<Korisnik>{
        return this.http.put<Korisnik>(`${this.apiServiceUrl}user/update`, user);
    }

    public deleteKorisnik(userId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServiceUrl}user/delete/${userId}`);
    }
    setAdmin(a: boolean) {
      this._isAdmin.next(a)
    }


    getAllUsers() {
      this.getKorisnike().subscribe( value => {
        this._users.next(value)
      })
    }
}
