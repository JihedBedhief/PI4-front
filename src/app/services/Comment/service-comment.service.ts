import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ='http://localhost:9090/Comment';

@Injectable({
  providedIn: 'root'
})
export class ServiceCommentService {


  constructor(private http: HttpClient) {}
  addComment(commentDto: any, postId: string,userId: string): Observable<any> {
    return this.http.post(`${BASE_URL}/add?postId=${postId}&userId=${userId}`, commentDto);
  }

  getAllComments(): Observable<any> {
    return this.http.get(BASE_URL);
  }

  getPostById(idItem: any): Observable<any> {
    return this.http.get(`${BASE_URL}/${idItem}`);
  }

  deletePost(idItem: any): Observable<any> {
    return this.http.delete(`${BASE_URL}/delete/${idItem}`);
  }

  updatepost(CommentDto: any): Observable<any> {
    return this.http.put(`${BASE_URL}/update`, CommentDto);
  }
  chageStauts( id : any,Bid:any){
    return this.http.put(BASE_URL+`/Edit/${id}`,Bid)
  }

  getAllCommentsByPostId(postId: string): Observable<any> {
    return this.http.get(`${BASE_URL}/post/${postId}`);
  }
}