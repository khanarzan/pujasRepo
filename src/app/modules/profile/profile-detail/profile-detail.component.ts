import { Component, ViewEncapsulation } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class ProfileDetailComponent {
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
