import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  env = environment;

  getTopTracks(id: string){
    const headers = {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }

    return this.http.get(`${this.env.top_tracks.base}${id}${this.env.top_tracks.complment}`, {headers});
  }

  getOneArtist(id: string){
    const headers = {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }

    return this.http.get(`${this.env.artist}${id}`, { headers })
  }

  getNewReleases(url?: string):Observable<any>{

    const headers = {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
    return this.http.get(url || this.env.new_releases, { headers })
      .pipe(
        catchError((error)=>{
          console.log("Imprimiendo el error")
          if(error.status===401){
            console.log("El token ha expirado, generando uno nuevo")
            this.getToken().subscribe((respuesta: any)=>{
              this.toLocalStorage(respuesta)
            });
            this.getNewReleases();
            return;
          }
          return error;
        }))
  }

  toLocalStorage(respuesta:any){
    for (const res in respuesta) {
      localStorage.setItem(res, respuesta[res]);
    }
    window.location.reload();
  }

  getToken() {
    let body = new HttpParams()
      .set('grant_type', this.env.grant_type)
      .set('client_secret', this.env.spotifyClientSecret)
      .set('client_id', this.env.spotifyClientID);

    let headers = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }

     return this.http.post(this.env.API, body.toString(), headers).pipe(
      catchError(err => {
        return err;
      }))
  }
}
