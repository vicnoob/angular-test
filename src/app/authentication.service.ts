import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private loginUrl = 'https://reqres.in/api/login';

  doLogin(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, user)
      .pipe(
        tap(res => {
          localStorage.setItem('userToken', res.token);
        }),
        catchError(this.handleError<User>('login fail'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getToken(): string {
    return localStorage.getItem('userToken');
  }
}
