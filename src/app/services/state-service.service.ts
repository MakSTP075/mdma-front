import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coment } from '../models/coment';
import { Historic } from '../models/historic';
import { Restaurant } from '../models/restaurant';
import { Siteview } from '../models/siteview';


@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  private token = environment.token

  reqHeader = new HttpHeaders({
/*     'Content-Type': 'application/json',
    'Authorization': 'Bearer token ' + this.token,
    'mode':'no-cors',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
 */
 });

  private apiServiceUrl = environment.apiBaseUrl;

 private readonly _restaurants = new BehaviorSubject<Restaurant[]> ([]);
 restaurants$ = this._restaurants.asObservable();

 private readonly _restaurant = new BehaviorSubject<Restaurant> ({});
 restaurant$ = this._restaurant.asObservable();

private readonly _historics = new BehaviorSubject<Historic[]> ([]);
historics$ = this._historics.asObservable();

private readonly _historic = new BehaviorSubject<Historic> ({});
historic$ = this._historic.asObservable();

private readonly _siteviews = new BehaviorSubject<Siteview[]> ([]);
siteviews$ = this._siteviews.asObservable();

private readonly _sietview = new BehaviorSubject<Siteview> ({});
sietviews$ = this._sietview.asObservable();

private readonly _coments = new BehaviorSubject<Coment[]> ([])
coments$ = this._coments.asObservable()

  constructor(private http: HttpClient) { }
setRestaurants(a: Restaurant[]){
  this._restaurants.next(a);
}

setComents(a:Coment[]){
  this._coments.next(a)
}

setRestaurant(a: Restaurant){
  this._restaurant.next(a);
  this.getComents("getAllCommentRateByRestaurantID", a.id!)
}

setHistorics(a: Historic[]){
  this._historics.next(a);
}

setHistoric(a: Historic){
  this._historic.next(a);
  console.log("historic selected ", this._historic.getValue());
  this.getComents("getAllCommentRateByHistoricID", a.id!)

}

setSietviews(a: Siteview[]){
  this._siteviews.next(a);

}

setSietview(a: Siteview){
  this._sietview.next(a);
  this.getComents("getAllCommentRateBySiteviewID", a.id!)
}
getRestaurant(){
  this.getAllRestaurants().subscribe(value => {
    this.setRestaurants(value)
  })
}
getHistorics(){
  this.getAllHistorics().subscribe(value => {
    this.setHistorics(value)
  })
}
getSiteviews(){
  this.getAllSiteviews().subscribe(value => {
    this.setSietviews(value)
  })

}
getComents(url:string, id: number){
  this.getAllComents(url,id).subscribe(value =>{
    this.setComents(value)
  })

}
updateSiteview(site: Siteview): Observable<any> {
 return this.http.put(this.apiServiceUrl + 'siteviews/update', site)
}
getSiteviewById(id: number): Observable<any> {
  return this.http.get(this.apiServiceUrl + `siteviews/get/${id}`)
}

deleteSiteview(id: number): Observable<any>{
  return this.http.delete<void>(this.apiServiceUrl + `siteviews/delete/${id}`)
}

updateRestaurant(restaurant: Restaurant): Observable<any> {
  return this.http.put(this.apiServiceUrl + 'restaurant/update', restaurant)
 }
 getRestaurantById(id: number): Observable<any> {
   return this.http.get(this.apiServiceUrl + `restaurants/get/${id}`)
 }

deleteRestaurant(id: number): Observable<any>{
  return this.http.delete<void>(this.apiServiceUrl + `restaurants/delete/${id}`)
}

 updateHistoric(historic: Historic): Observable<any> {
  return this.http.put(this.apiServiceUrl + 'historic/update', historic)
 }
 getHistoricById(id: number): Observable<any> {
  return this.http.get(this.apiServiceUrl + `historic/get/${id}`)
}
deleteHistoric(id: number): Observable<any>{
  return this.http.delete<void>(this.apiServiceUrl + `historic/delete/${id}`)
}



getAllComents(url: string, id: number): Observable<any>{
  return this.http.get(this.apiServiceUrl+`CommentRate/${url}/${id}`,{ headers: this.reqHeader })
  }

getAllRestaurants(): Observable<any>{
  return this.http.get(this.apiServiceUrl+`restaurants/getAll`,{ headers: this.reqHeader })
  }
getAllHistorics(): Observable<any>{
  return this.http.get(this.apiServiceUrl+`historics/getAll`,{ headers: this.reqHeader })
  }
getAllSiteviews(): Observable<any>{
  return this.http.get(this.apiServiceUrl+`siteviews/getAll`,{ headers: this.reqHeader })
  }

}
