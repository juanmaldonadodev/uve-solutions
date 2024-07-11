import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

  private usersSubject = new BehaviorSubject<User[]>([]);
  public observable$ = this.usersSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  
  getUsers(): Observable<User[]> {
    console.debug('Hello')
    return this.httpClient.get<User[]>(this.API_URL,{ responseType: 'json' }).pipe(
      tap(users => {
        console.table(users);
        this.usersSubject.next(users)
      }
      )
    );
  }

  filterUsers(text: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_URL).pipe(
      tap(users => {
        const usersToReturn =  users.filter(user => {
          return user.name.includes(text);
        });
        this.usersSubject.next(usersToReturn)
      }
      )
    );
  }

}
