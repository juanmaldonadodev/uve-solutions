import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 /* ngOnInit() {
    this.searchField.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      switchMap(term => {
        this.searchingIngredient = true;
        this.searchInputLength = this.searchInput.value.length;
        return this.searchService.searchIngredients(term);
      }))
      .subscribe(
        (result: any) => {
          this.filteredIngredients = [];
          if (result) {
            this.filteredIngredients = result.body.ingredients;
          }
          this.searchingIngredient = false;
          this.sendEventNoIngredient();
        }, error => {
          this.filteredIngredients = [];
          this.searchingIngredient = false;
        }
      );
  }*/
}
