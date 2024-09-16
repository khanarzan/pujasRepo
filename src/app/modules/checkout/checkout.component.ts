import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [AccordionModule,FormsModule,DropdownModule,RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: '+91', code: 'NY' },
          { name: '+1', code: 'RM' },
          { name: '+099', code: 'LDN' },
          { name: '+99', code: 'IST' },
          { name: '+81', code: 'PRS' }
      ];
  }

}
