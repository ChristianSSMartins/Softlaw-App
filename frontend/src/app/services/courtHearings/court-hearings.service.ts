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

}
