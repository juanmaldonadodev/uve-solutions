import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { InitialsPipe } from './pipes/initials.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SearchComponent,
    InitialsPipe
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    InitialsPipe
  ]
})
export class SharedModule { }