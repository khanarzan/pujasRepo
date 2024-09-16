import { Component } from '@angular/core';
import { ListingCardComponent } from '../../common/listing-card/listing-card.component';

@Component({
  selector: 'app-add-favorites',
  standalone: true,
  imports: [ListingCardComponent],
  templateUrl: './add-favorites.component.html',
  styleUrl: './add-favorites.component.scss'
})
export class AddFavoritesComponent {

}
