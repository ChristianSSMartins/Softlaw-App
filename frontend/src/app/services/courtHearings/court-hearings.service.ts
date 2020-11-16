import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CourtHearing } from './../../models/courtHearing.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourtHearingsService {

  baseUrl = 'http://192.168.1.103:8080/courtHearings';

  constructor(private http: HttpClient) { }

  create(courtHearing: CourtHearing): Observable<CourtHearing> {
    return this.http.post<CourtHearing>(this.baseUrl, courtHearing);
  }

  read(): Observable<CourtHearing[]> {
    return this.http.get<CourtHearing[]>(this.baseUrl);
  }

  readById(id: string): Observable<CourtHearing> {
    const idUrl = `${this.baseUrl}/${id}`;
    return this.http.get<CourtHearing>(idUrl);
  }

  update(courtHearing: CourtHearing): Observable<CourtHearing> {
    const idUrl = `${this.baseUrl}/${courtHearing.id}`;
    return this.http.put<CourtHearing>(idUrl, courtHearing);
  }

  delete(id: string): Observable<CourtHearing> {
    const idUrl = `${this.baseUrl}/${id}`;
    return this.http.delete<CourtHearing>(idUrl);
  }
}
