import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Logger } from "../logger.service";

const log = new Logger('TokenAuthInterceptor');

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // logic handlers here
    const token = sessionStorage.getItem('credentials') ?
      JSON.parse(sessionStorage.getItem('credentials')).token : JSON.parse(localStorage.getItem('credentials')).token;
    if (token) {
      req = req.clone({ setHeaders: {
        'Authorization': `Token ${token}`
      }});
    }
    return next.handle(req);
  }

}
