import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const routes = {};


@Injectable({
  providedIn: 'root'
})
export class TwitteraccountService {

  constructor(private httpClient: HttpClient) { }

  getByUrl(url: string): Observable<object> {
    return this.httpClient
    .get(url);
  }
}
