import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('IN INTERCEPTOR');
    const token = this.authService.getToken();
    if (token) {
      const request = req.clone({
        setHeaders: {Authorization: 'Bearer ' + token}
      });
      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }


}
