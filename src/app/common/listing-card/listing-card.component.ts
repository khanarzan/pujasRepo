import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OnHoverActionsComponent } from '../on-hover-actions/on-hover-actions.component';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [OnHoverActionsComponent,RouterModule],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class ListingCardComponent {
  @Input() data: any;  
  constructor(private router: Router) { }

  navigateToRoute() {
    this.router.navigate(['/detail']);
  }
}
