import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from 'src/environments/environment';


// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {


  constructor( private httpClient: HttpClient, ) { }

  addNewUser(form) {
    return this.httpClient.post(environment.baseURL + '/register', form, {responseType: 'text' as 'json'});

  }
}
