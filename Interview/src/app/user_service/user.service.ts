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
      'Authorization': `Bearer ${token.trim()}`
    });
  }

  uploadExcel(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(`${this.apiUrl}/user/upload_excel`, formData, {
      headers: this.getHeaders() //
    });
  }


  getCountries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/get_countries`, { headers: this.getHeaders() });
  }

  getState(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/get_state`,  { headers: this.getHeaders() });
  }

  getDistrict(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/get_district`, { headers: this.getHeaders() });
  }
  getCity(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/get_city`, { headers: this.getHeaders() });
  }




}
