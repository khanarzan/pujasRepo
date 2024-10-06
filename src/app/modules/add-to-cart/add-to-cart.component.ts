import { Component } from '@angular/core';
import { BreadcrumComponent } from '../../common/breadcrum/breadcrum.component';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [BreadcrumComponent],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {

}
