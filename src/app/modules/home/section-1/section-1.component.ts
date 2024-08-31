import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Product } from '../../../product';
import { ProductService } from '../../../productservice';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Section1Component {
  products: Product[] | undefined;
  images: any[] = [];

  responsiveOptions: any[] | undefined;
  ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
          
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    this.images = [
      { src: 'https://admin.rudraksha-ratna.com/rudratestort/Test/WebBannerImages/Vastu.jpg' },
      { src: 'https://admin.rudraksha-ratna.com/rudratestort/Test/WebBannerImages/Shaligram.jpg' },
      { src: 'https://admin.rudraksha-ratna.com/rudratestort/Test/WebBannerImages/Yantra.jpg' },
      { src: 'https://admin.rudraksha-ratna.com/rudratestort/Test/WebBannerImages/Puja_Services.jpg' },
      { src: 'https://admin.rudraksha-ratna.com/rudratestort/Test/WebBannerImages/thumbnail_Rudraksha.jpg' },
    ];
  }

}
