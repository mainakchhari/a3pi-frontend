import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  login: () => `/twitter-login`,
  me: () => `/dash_users/me`
};

export interface DashUser {
  id: number;
  twitteraccount_set: Array<object>;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  twitterLogin(): Observable<string> {
    console.log(routes.login());
    return this.httpClient
    .get(routes.login())
    .pipe(
      map((body: any) => body.redirect_uri),
      catchError(() => {
        return of('Error, could not load login url');
      })
    );
  }

  fetchTwitterAccounts(): Observable<object> {
    return this.httpClient
    .get(routes.me())
    .pipe(
      map((body: any) => body.twitteraccount_set),
      catchError(() => of('Error, could not load accounts'))
    );
    // .pipe(
    //   map((dash_user: DashUser) => dash_user.twitteraccount_set)
    //   );
  }
}
