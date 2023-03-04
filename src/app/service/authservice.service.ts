import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icredentials } from '../Interface/icredentials';
import { Observable } from 'rxjs';
import { Itokens } from '../Interface/itokens';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  url = 'http://localhost:8080/api/auth/connexion'

  constructor(private http: HttpClient) { }

  login(credentials: Icredentials): Observable<Itokens>{
      return this.http.post<Itokens>(this.url, credentials)
    }
    

}