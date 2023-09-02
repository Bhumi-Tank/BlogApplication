import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserInfo } from '../models/loginInfo';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public articlesBasePath = `https://localhost:7174`;

  constructor(private http: HttpClient) { }

  login(userInfo: IUserInfo): Observable<any> {
    const path = this.articlesBasePath + `/login`;
    return this.http.post(`${path}`, userInfo);
  }
}
