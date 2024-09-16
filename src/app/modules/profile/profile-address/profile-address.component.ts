import { Component, ViewEncapsulation } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
  styleUrl: './profile-address.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class ProfileAddressComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
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
