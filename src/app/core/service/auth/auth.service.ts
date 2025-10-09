import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000';
  private readonly tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  async login(): Promise<string> {
    const credentials = { user: 'admin', password: '1234' };
    const response = await lastValueFrom(
      this.http.post<{ token: string }>(
        `${this.apiUrl}/auth/login`,
        credentials
      )
    );
    this.setToken(response.token);
    return response.token;
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
