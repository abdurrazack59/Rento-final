import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  public login(username, password) {
    sessionStorage.removeItem('token');
    return this.http.post(environment.baseURL + '/login', { email: username, password }, {observe: 'response'})
      .pipe(map((res: any) => {
        if (res.ok) {
          sessionStorage.setItem('token', res.headers.get('Authorization'));
          // console.log(sessionStorage.getItem('token'));
        }
      }));
  }

  loggedIn() {
    return sessionStorage.getItem('token');
  }

  public logout() {
    sessionStorage.removeItem('token');
  }
}

