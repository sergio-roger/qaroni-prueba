import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '@services/utils/utils.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private utilService: UtilsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.utilService.token;

    if (token) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}
