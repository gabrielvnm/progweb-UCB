import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  
  constructor() {
    this.checkAdminStatus();
  }

  checkAdminStatus() {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      this.isAdminSubject.next(userData.role === 'admin');
    }
  }

  admin(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }

  loginAsAdmin() {
    localStorage.setItem('user', JSON.stringify({ role: 'admin', isAdmin: true }));
    this.isAdminSubject.next(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.isAdminSubject.next(false);
  }
}