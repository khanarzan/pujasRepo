import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Product } from '../../../product';
import { ProductService } from '../../../productservice';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Section4Component {
  products: Product[] | undefined;

  responsiveOptions2: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });
      this.responsiveOptions2 = [
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
      AOS.init();
  }
}
