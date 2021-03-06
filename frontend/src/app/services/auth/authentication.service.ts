import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private usuarioActualSubject: BehaviorSubject<any>;
    public usuarioActualObs: Observable<any>;

    constructor(private http: HttpClient) {
        this.usuarioActualSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.usuarioActualObs = this.usuarioActualSubject.asObservable();
    }

    public get usuarioActual() {
        return this.usuarioActualSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/fintech/login/`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.usuarioActualSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.usuarioActualSubject.next(null);
    }

    register(name: string, email: string, pwd: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/fintech/register/`, { name, email, pwd })
            .pipe(map(user => {
                //localStorage.setItem('currentUser', JSON.stringify(user));
                //this.usuarioActualSubject.next(user);
                return user;
            }));
    }

}
