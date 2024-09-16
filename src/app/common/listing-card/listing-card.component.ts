import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss'
})
export class ListingCardComponent {
  @Input() data: any;  
  constructor(private router: Router) { }

  navigateToRoute() {
    this.router.navigate(['/detail']);
  }
}
