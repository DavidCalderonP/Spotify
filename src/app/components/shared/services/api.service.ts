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
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`,
      'id': id
    }

    return this.http.get(this.env.top_tracks, {headers})
  }

  getOneArtist(id: string){
    const headers = {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }

    return this.http.get(`${this.env.artist}${id}`, { headers })
  }

  getNewReleases():Observable<any>{

    const headers = {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
    return this.http.get(this.env.new_releases, { headers })
      .pipe(
        catchError((error)=>{
          console.log("Imprimiendo el error")
          if(error.status===401){
            console.log("El token ha expirado, generando uno nuevo")
            this.getToken();
            this.getNewReleases();
            return;
          }
          return error;
        }))
  }

  getToken() {
    let body = new HttpParams()
      .set('grant_type', this.env.grant_type)
      .set('client_secret', this.env.spotifyClientSecret)
      .set('client_id', this.env.spotifyClientID);

    let headers = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }

     this.http.post(this.env.API, body.toString(), headers).pipe(
      catchError(err => {
        return err;
      })).subscribe((respuesta: any)=>{
      for (const res in respuesta) {
        localStorage.setItem(res, respuesta[res]);
      }
    });
  }
}
