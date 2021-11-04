import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecord } from '../models/Record';

@Injectable({
  providedIn: 'root'
})
export class ArrivalsService {

  constructor(private http: HttpClient) {}

  getAllArrivals(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/arrivals');
  }

  getOneArrival(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/arrivals/${id}`);
  }

  deleteArrival(id: number) {
    return this.http.delete(`http://localhost:3000/arrivals/${id}`);
  }

  createArrival(arrival: IRecord): Observable<IRecord> {
    return this.http.post<IRecord>(`http://localhost:3000/arrivals`, arrival);
  }

  updateArrival(arrival: any): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/arrivals/${arrival.id}`,
      arrival
    );
  }

  getRecordsSum(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/total`);
  }

  getTotalIsLate(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/is_late`);
  }
}
