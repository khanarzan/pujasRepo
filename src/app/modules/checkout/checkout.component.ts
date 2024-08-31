import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
