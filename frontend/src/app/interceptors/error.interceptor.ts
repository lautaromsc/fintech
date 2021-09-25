import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // Si obtiene 401 es que no esta autentificado por eso se lo redirecciona
                this.authenticationService.logout();
                location.reload(true);
            }

            //Si no es un error comun y se devuelve la excepcion
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
