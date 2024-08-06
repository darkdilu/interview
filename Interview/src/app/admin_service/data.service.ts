import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let token = '';

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        token = user.token || '';
      } catch (e) {
        console.error('Error parsing currentUser from localStorage:', e);
      }
    }

    if (!token) {
      console.warn('No token found in localStorage');
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.trim()}`
    });
  }

  addCountry(country: { name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/add_countries`, country, { headers: this.getHeaders() });
  }

  addState(state: { name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/add_state`, state, { headers: this.getHeaders() });
  }

  addDistrict(district: { name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/add_district`, district, { headers: this.getHeaders() });
  }

  addCity(city: { name: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/add_city`, city, { headers: this.getHeaders() });
  }
}
