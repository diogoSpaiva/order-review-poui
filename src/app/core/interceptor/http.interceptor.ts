import {
  HttpRequest,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);

  if (req.url.includes('/auth')) {
    return next(req);
  }

  const token = authService.getToken();

  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(cloned);
  }

  return from(authService.login()).pipe(
    switchMap((newToken) => {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${newToken}` },
      });
      return next(cloned);
    })
  );
};
