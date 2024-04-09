import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userdata } from '../../Model/userData';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private httpClient: HttpClient) { }

  option = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer 1c36caf8b0ee2d50ca590c0c916bd6eca3246bb31f4fbb8374485e0c3cde9d18"
    },
  }

  getData():Observable<userdata[]> {
    return this.httpClient.request<userdata[]>('GET', 'https://gorest.co.in/public/v2/users',this.option);
  }
  
}
