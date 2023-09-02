import { Injectable } from '@angular/core';
import { IJwtToken } from '../models/loginInfo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly jwtLocalStorageName="auth_tocken";
  private readonly expiresAt="expires_at";

  constructor() { }

  public getJwtToken() {
    return localStorage.getItem(this.jwtLocalStorageName);
  }

  public setJwtToken(jwt: IJwtToken) {
    localStorage.setItem(this.jwtLocalStorageName, jwt.token);
    localStorage.setItem(this.expiresAt, JSON.stringify(jwt.expires));
  }
}
