import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testomonial',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testomonial.component.html',
  styleUrl: './testomonial.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class TestomonialComponent {
  images: any[] = [];

  responsiveOptions;
  
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  
  ngOnInit(): void {
    this.images = [
      { src: 'https://lh3.googleusercontent.com/OxlBEVvJ8GENuKnWVTA4qEJfo3EzjxTrv3tjz4beW47bB81VKXkT1imFx40wLtwV1CQTwbx8vuFTLMRfJWIZvoeEo8jDENs_EEyE=w184' },
      { src: 'https://lh3.googleusercontent.com/jtAjMdVc79GOSYnpYPN-KJ5hb6WQ3RMvjPoN5cu-OGIQUtcQScBmMa09UkxLmjhDnGs89U8zjJwScmWw7CLKwsjX4P4r4ZzJ12U=w184' },
      { src: 'https://lh3.googleusercontent.com/zWGx8-a0go3F-_Z8vxMd1J819owiYinrH52MIHK-y58cilsLkQ5FFrpYUCLtRdxTc4ZVKUkgENZKIhmztRoSAWTLqx28rzTPW_w=w184' },
      { src: 'https://i.travelapi.com/lodging/38000000/37640000/37632000/37631981/a0f1643c_b.jpg' },
      { src: 'https://lh3.googleusercontent.com/zWGx8-a0go3F-_Z8vxMd1J819owiYinrH52MIHK-y58cilsLkQ5FFrpYUCLtRdxTc4ZVKUkgENZKIhmztRoSAWTLqx28rzTPW_w=w184' }
    ];
  }
}
