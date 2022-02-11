import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, ReplaySubject, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new ReplaySubject<boolean>(1);
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    if(localStorage.getItem('token') != null){
      this.isLoggedInSubject.next(true);
    }else{
      this.isLoggedInSubject.next(false);
    }
  }

  public login(name: string, password: string): Observable<any> {
    const user = {username: name, password: password}
    return this.http.post('https://fakestoreapi.com/auth/login', user).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        this.isLoggedInSubject.next(true);
      }),
      catchError(error => {
        localStorage.removeItem('token');
        this.isLoggedInSubject.next(false);
        return error;
      })
    );
  }

  public logout(){
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/']);
  }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject;
  }
}
