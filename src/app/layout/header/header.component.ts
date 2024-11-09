import { Component, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ProductService } from '../../productservice';
import { CommonService } from '../../core/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  items: MegaMenuItem[] | undefined;
  items1: MenuItem[] | undefined;
  constructor(public comServ : CommonService,private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Rudraksha',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                {
                  label: '1 Mukhi Half Moon',
                },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Gemstones',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Yantras',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Idols',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Vastu',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Jewellery',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Pujas',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'More',
        items: [
          [
            {
              label: 'Nepal Rudraksha',
              items: [
                { label: '1 Mukhi Half Moon' },
                { label: '2 mukhi Nepal' },
                { label: '3 mukhi Nepal' },
                { label: '4 mukhi Nepal' },
                { label: '5 mukhi Nepal' },
                { label: '6 mukhi Nepal' },
                { label: '7 mukhi Nepal' },
                { label: '8 mukhi Nepal' },
                { label: '9 mukhi Nepal' },
                { label: '10 mukhi Nepal' },
                { label: '11 mukhi Nepal' },
                { label: '13 mukhi Nepal' },
                { label: '14 mukhi Nepal' },
                { label: '15 mukhi Nepal' },
              ],
            },
          ],
          [
            {
              label: 'Java (Indonesian) Rudraksha',
              items: [
                { label: '1 mukhi Java (Indonesia)' },
                { label: '2 mukhi Java (Indonesia)' },
                { label: '3 mukhi Java (Indonesia)' },
                { label: '4 mukhi Java (Indonesia)' },
                { label: '5 mukhi Java (Indonesia)' },
                { label: '6 mukhi Java (Indonesia)' },
                { label: '7 mukhi Java (Indonesia)' },
                { label: '8 mukhi Java (Indonesia)' },
                { label: '9 mukhi Java (Indonesia)' },
                { label: '10 mukhi Java (Indonesia)' },
                { label: '11 mukhi Java (Indonesia)' },
                { label: '12 mukhi Java (Indonesia)' },
                { label: '13 mukhi Java (Indonesia)' },
                { label: '14 mukhi Java (Indonesia)' },
                { label: '15   mukhi Java (Indonesia)' },
              ],
            },
          ],
          [
            {
              label: 'Rudraksha Malas',
              items: [
                { label: '1 Mukhi Rudraksha Mala' },
                { label: '2 Mukhi Rudraksha Mala' },
                { label: '3 Mukhi Rudraksha Mala' },
                { label: '4 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '6 Mukhi Rudraksha Mala' },
                { label: '7 Mukhi Rudraksha Mala' },
                { label: '8 Mukhi Rudraksha Mala' },
                { label: '9 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
                { label: '5 Mukhi Rudraksha Mala' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Consultation',
        items: [
          [
            { label: 'Consult with Sakhashree' },
            { label: 'Rudraksha & Gems Recommendation' },
            { label: 'Puja Services Recommendation' },
            { label: 'Chakra Vastu Consultation' },
            { label: 'Chakra Cleansing Meditation with Sakhashree' },
            { label: 'Astrology Consultation' }
          ]
        ],
      },
      {
        label: 'Brand Info',
        items: [
          [
            { label: 'About Us' },
            { label: 'Articles (Blogs)' },
            { label: 'Testimonials' },
            { label: 'Careers' },
            { label: 'Our Team' },
            { label: 'Disclaimer' },
          ]
        ],
      },
   
    ];
    this.items1 = [
      {
        label: 'My Account',
        command: () => {
          this.router.navigate(['profile/manage']);
      }
      },
      {
        label: 'My Orders'
      },
      {
        label: 'Login',
        command: () => {
          this.router.navigate(['full-login']);
      }
      }
  ];
  }
  menuOpen = false;
  menuCategories = [
    { name: 'Category 1', open: true, items: [{ name: 'Listing Page', link: '/listing' }, { name: 'Sub-item 2', link: '/item2' }] },
    { name: 'Category 2', open: false, items: [{ name: 'Sub-item 3', link: '/listing' }, { name: 'Sub-item 4', link: '/item4' }] }
    // Add more categories and items as needed
  ];
  
  
  toggleCategory(category) {
    category.open = !category.open;
  }
  
}
