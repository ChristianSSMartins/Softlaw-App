import { Client } from './../../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://192.168.1.104:8080/client';

  constructor(private http: HttpClient) { }

  create(user: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, user);
  }

  get(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }
}
