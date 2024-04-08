import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { userdata } from '../Model/userData';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
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

  postData(data: userdata): Observable<userdata> {
    return this.httpClient.post<userdata>("https://gorest.co.in/public/v2/users", data, this.option)
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
