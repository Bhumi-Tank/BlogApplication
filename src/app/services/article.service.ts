import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articlesBasePath = `https://localhost:7174`;

  constructor(private http: HttpClient) { }

  // public getArticlesBasePath(): Observable<any> {
  //     return of(this.articlesBasePath);
  // }

  public addArticle(articles: any): Observable<any> {
    const path = this.articlesBasePath + `/api/Articles`;
    return this.http.post(`${path}`, articles);
  }
}
