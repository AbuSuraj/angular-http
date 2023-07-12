import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_TOKEN = 'asdawjrwoe123nfsd';
    const authReq = request.clone({
      setHeaders:{'Authorization':`Bearer ${API_TOKEN}`,}
    })
    return next.handle(authReq);
  }
}
