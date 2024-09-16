import { Component } from '@angular/core';
import { ListingCardComponent } from '../../common/listing-card/listing-card.component';
import { BreadcrumComponent } from '../../common/breadcrum/breadcrum.component';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ListingCardComponent,BreadcrumComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {

}
