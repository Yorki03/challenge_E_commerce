import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../../shared/service/notificaciones.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('Custom-Header', 'YourHeaderValue')
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.notificationService.showError(error.message);
        return throwError(error);
      })
    );
  }
}
