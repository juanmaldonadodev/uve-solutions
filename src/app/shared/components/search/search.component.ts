
import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { distinctUntilChanged  } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm: FormGroup;
  searchField: FormControl;
  private searchTerms$ = new Subject<string>();


  constructor(
    public usersService: UsersService,
    private formBuilder: FormBuilder,
  ) {
    this.searchField = new FormControl();
    this.searchForm = this.formBuilder.group({ search: this.searchField });
  }

  ngOnInit(): void {
    this.searchTerms$.pipe(
      distinctUntilChanged(),
    ).subscribe(term => {
      this.usersService.filterUsers(term);
    });

    this.searchField.valueChanges.subscribe(term => this.searchTerms$.next(term));
  }

  ngOnDestroy(): void {
    this.searchTerms$.complete();
  }
}
