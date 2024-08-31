import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ProductService } from '../../../productservice';
import { Product } from '../../../product';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Section2Component {
  products: Product[] | undefined;

  responsiveOptions1: any[] | undefined;
  images: any[] = [];


  ngOnInit() {
    this.responsiveOptions1 = [
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
      { src: 'https://www.rudraksha-ratna.com/assets/home/consult-home-banner.jpg' },
      { src: 'https://s3.amazonaws.com/RudraCentre/ProductImages/banner/thumbnail_Tripindi-mahapuja-small-homepage.jpg' },
      { src: 'https://s3.amazonaws.com/RudraCentre/ProductImages/banner/thumbnail_Pitru-Paksha-Shradh-Mahapuja-small-banner-Home-page_(1).jpg' }
    ];
  }
}
