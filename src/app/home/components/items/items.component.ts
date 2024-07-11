import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public usersService: UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getUsers()
  }


  trackById(user: User) {
    return user.id;
  }

}
