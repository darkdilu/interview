import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    let storedUser = null;
    if (isPlatformBrowser(this.platformId)) {
      storedUser = localStorage.getItem('currentUser');
    }
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    const user = this.currentUserSubject.value;
    if (user && user.token) {
      const decodedToken: any =jwtDecode(user.token);
      return { ...user, role: decodedToken.role };
    }
    return null;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(tap(user => {
       
        if (user && user.token) {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  signup(username: string, password: string,role:string) {
    return this.http.post<any>(`${this.baseUrl}/signup`, { username, password,role })
      .pipe(tap(user => {
       
        if (user) {
            this.router.navigate(['/login']);
          }
          return user;
   


      }));
  }





  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }

  isAdmin(): boolean {
    const user = this.currentUserValue;
    return user && user.role === 'admin';
  }
}
