import { Component, ViewEncapsulation } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BreadcrumComponent } from '../../common/breadcrum/breadcrum.component';
import { CarouselModule } from 'primeng/carousel';
import { ListingCardComponent } from '../listing/listing-card/listing-card.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [FloatLabelModule,CalendarModule,FormsModule,DialogModule,BreadcrumComponent,CarouselModule,ListingCardComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class DetailComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  listings = [
    { title: 'Listing 1', description: 'Description 1' },
    { title: 'Listing 2', description: 'Description 2' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    // Add more listings as necessary
  ];
}
