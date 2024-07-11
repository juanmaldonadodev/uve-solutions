import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {
  users: User[] = [];
  destroy$ = new Subject<void>();

  constructor(private usersService: UsersService) {


  }
  ngOnInit(): void {
    this.usersService.getUsers();
    this.usersService.observable$
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: User[]) => {
        console.table(users);
        this.users = (users);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackById(user: User) {
    return user.id;
  }

}
