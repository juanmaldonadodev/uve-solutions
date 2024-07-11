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
  users: User[] = [];
  searchText: string = '';
  usersCache: User[] = [];
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    this.httpClient.get<User[]>(this.API_URL).subscribe((data) => {
      this.usersCache = data;
      this.users = data;
    });
  }

  filterUsers(text: string) {
    this.searchText = text;

    this.users = this.usersCache.filter(obj => {
      return Object.values(obj).some(value =>
        value.toString().toLowerCase().includes(text.toLowerCase())
      );
    });
  }


}
