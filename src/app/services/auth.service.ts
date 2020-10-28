import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(token: string): void{
    console.log(token);
    localStorage.setItem('token', token);
  }

  logout(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  loggedIn(): boolean{
    return localStorage.getItem('token') != null;
  }

  getToken(): string{
    return localStorage.getItem('token');
  }

}
