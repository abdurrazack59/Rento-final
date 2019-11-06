import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${this.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
  getToken() {
    sessionStorage.getItem('Token');

  }

}
