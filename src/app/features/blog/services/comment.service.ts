import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  // createComment(newsId: number, author: string, commentText: string): Observable<any> {
  //   const params = {
  //     newsId: newsId.toString(),
  //     author: author,
  //   };
  
  //   return this.http.post<any>(`${baseUrl}/comment/text`, commentText, { params });
  // }
  

  // createComment(newsId: number, author: string, commentText: string): Observable<any> {
  //   const params = {
  //     newsId: newsId.toString(),
  //     author: author,
  //   };

  //   return this.http.post<any>(baseUrl + `/comment/text`, commentText, { params });
  // }

  createComment(newsId: number, author: string, commentText: string): Observable<any> {
    const params = {
      newsId: newsId.toString(),
      author: author,
    };
  
    // Send a JSON object with 'commentText' inside it
    const body = { commentText: commentText };
  
    // Set content type to application/json explicitly
    return this.http.post<any>(`${baseUrl}/comment/text`, body, {
      params,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getAllCommentsperNewsByNewsId(newsId: number): Observable<any> {
    return this.http.get(`${baseUrl}/comment/text/${newsId}`);
  }
  
}
