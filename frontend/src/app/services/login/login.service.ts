import { Client } from './../../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3001/client';

  constructor(private http: HttpClient) { }

  create(user: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, user);
  }

  get(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }
}
