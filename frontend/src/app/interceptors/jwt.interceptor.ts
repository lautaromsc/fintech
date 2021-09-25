import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Agregamos el usuario si lo tenemos disponible en el servicio de autentificacion
        let usuarioActual = this.authenticationService.usuarioActual;
        if (usuarioActual && usuarioActual.id_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuarioActual.id_token}`
                }
            });
        }

        return next.handle(request);
    }
}
