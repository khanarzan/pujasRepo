import { Component, Input } from '@angular/core';
import { ListingCardComponent } from '../../common/listing-card/listing-card.component';
import { BreadcrumComponent } from '../../common/breadcrum/breadcrum.component';
import { MenuModule } from 'primeng/menu';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ListingCardComponent,CommonModule,BreadcrumComponent,FormsModule,MenuModule,SliderModule,    NgxSliderModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
  };
  isOpen1 = false;
  isOpen2 = false;
  isOpen3 = false;

  toggleDropdown1() {
    this.isOpen1 = !this.isOpen1;
  }
  toggleDropdown2() {
    this.isOpen2 = !this.isOpen2;
  }
  toggleDropdown3() {
    this.isOpen3 = !this.isOpen3;
  }

  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  selectedOption: string | null = null;


  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen1 = false;
    this.isOpen2 = false;
    this.isOpen3 = false;
  }
}
