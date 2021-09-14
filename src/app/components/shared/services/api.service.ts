import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newReleases, apiCredentials } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNewReleases():Observable<Object>{
    const headers = {
      'Authorization': `${apiCredentials.token_type} ${apiCredentials.access_token}`
    }
    return this.http.get(newReleases, { headers })
  }
}
