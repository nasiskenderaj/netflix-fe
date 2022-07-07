import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable,throwError} from 'rxjs';
import {GlobalstoreService} from "./globalstore.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private localstorage:GlobalstoreService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
const token=this.localstorage.getItem('user');


  if (token) {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  };
    return next.handle(request).pipe(
      catchError((err: Error) => {
        if ((err instanceof HttpErrorResponse) && (err.status === 401)) {
          this.router.navigateByUrl('/auth/login');
        }
        return throwError(() => err);
      })
    );
  }


}
