import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  private comments: IComment[] = [];
  private url = '/assets/comments.json';

  public getComments(): Observable<any> {
    return new Observable((observer) => {
      if (this.comments.length === 0) {
        setTimeout( () => {
          this.http.get<IComment[]>(this.url).subscribe(res => {
            this.comments = res;
            observer.next(this.comments);
            observer.complete();
          });
        }, 2000);
      } else {
        observer.next(this.comments);
        observer.complete();
      }
    });
  }

  public addComments(comment: IComment): Observable<any> {
    return new Observable((observer) => {

      this.comments.push(comment);

      setTimeout( () => {
        comment.id = Math.random();
        observer.next(comment.id);
        observer.complete();
      }, 2000);
    });

    // return this.http.post(this.url, comment);

  }

}

export interface IComment {
  id: number;
  firstName: string;
  lastName: string;
  comment: string;
  authorId: number;
  datePosed: number;
  authorAvatarUrl: string;
}
