import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

  const DEFAULT_INITIALS: string = 'EK'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() user: User | undefined;

 
}
