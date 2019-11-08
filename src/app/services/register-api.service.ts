import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {


  constructor( private httpClient: HttpClient, private httpParams: HttpParams,private authService: AuthService
    ) { }

  addNewUser(form) {
    return this.httpClient.post(environment.baseURL + '/register', form, {responseType: 'text' as 'json'});

  }
  getUserDetails(): Observable<any> {
    const param = new HttpParams().set('email', sessionStorage.getItem('email'));
    return this.httpClient.get(environment.baseURL + '/user/getUser', {params: param} );
  }

}
