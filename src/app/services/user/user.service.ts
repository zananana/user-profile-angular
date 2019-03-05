import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private user: Iuser;
  private url = '/assets/user.json';

  public getUser(): Observable<any> {
    return new Observable((observer) => {
        setTimeout( () => {
          this.http.get<Iuser>(this.url).subscribe(res => {
            this.user = res;
            observer.next(this.user);
            observer.complete();
          });
        }, 2000);
    });
  }

  public updateUser(user: Iuser): Observable<any> {
    return new Observable((observer) => {

      this.user = user;

      setTimeout( () => {
        observer.next(this.user);
        observer.complete();
      }, 2000);
    });

    // return this.http.put(this.url, user);

  }

}

export interface Iuser {
  id: number;
  firstName: string;
  lastName: string;
  likesNum: number;
  following: number;
  followers: number;
  city: string;
  country: string;
  avatarUrl: string;
  profileUser: string;
}
