import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [RouterModule],
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
