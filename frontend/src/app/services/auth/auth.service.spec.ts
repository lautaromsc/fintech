import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { first } from 'rxjs/operators';

describe('AuthService', () => {
  let service: AuthenticationService;
  let injector = null;
  let httpMock: HttpTestingController;
  let url = 'http://localhost:8080/api/authenticate';
  const token = { "id_token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiO…2BSqVTh0WMeDuOoSGTGvNMJQxCobqW_GN-GAX72NVJJHO9lAg" };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing the method login', () => {
    service.login('admin', 'admin').pipe(first()).subscribe((tokens) => {
      expect(tokens).toEqual(token);
    });
    let request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST');
    request.flush(token);
  });

  it('testing the method logout', () => {
    localStorage.removeItem('currentUser');
    expect(service.logout()).toBeFalsy();
  });

  it('testing the variable usuarioActual', () => {
    expect(service.usuarioActual).toBeTruthy();
  })

  it('testing the variable usuarioActual', () => {
    const val = spyOn(service, 'usuarioActual').and.returnValue(token);
    expect(val).not.toBeNull();
    expect(val).not.toHaveBeenCalled();
  })

});
