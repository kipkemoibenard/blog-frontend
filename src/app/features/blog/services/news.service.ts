import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private http: HttpClient
  ) { }

  postNews(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/news/save`, data);
  }

  getAllNews(): Observable<any> {
    return this.http.get(`${baseUrl}/news/all-news`);
  }

  getNewsById(newsId: number): Observable<any> {
    return this.http.get(`${baseUrl}/news/${newsId}`);
  }

  likeNewsById(newsId: number): Observable<any> {
    return this.http.put(`${baseUrl}/news/${newsId}/like`, {});
    // return this.http.put(`${baseUrl}/news/${newsId}/like`, null);
  }

  searchNewsByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}/news/search/${title}`);
  }
}
