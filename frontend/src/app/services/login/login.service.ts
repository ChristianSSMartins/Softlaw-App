import { CryptoService } from './../cryptography/crypto.service';
import { Client } from './../../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://192.168.1.102:8080/client';

  constructor(private http: HttpClient, private cryptoService: CryptoService) { }

  create(user: Client): Observable<Client> {
    user.password = this.cryptoService.encrypt(user.password);
    return this.http.post<Client>(this.baseUrl, user);
  }

  get(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }
}
