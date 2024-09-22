import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ListingCardComponent } from '../../common/listing-card/listing-card.component';
import { PhotoService } from '../../service/details/photoservice';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class DetailComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  listings = [
    { title: 'Listing 1', description: 'Description 1' },
    { title: 'Listing 2', description: 'Description 2' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    { title: 'Listing 3', description: 'Description 3' },
    // Add more listings as necessary
  ];

  // images
  images: any[] | undefined;
    
    responsiveOptions: any[] | undefined;
    responsiveOptions1: any[] | undefined;

    constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.responsiveOptions1 = [
      {
          breakpoint: '1199px',
          numVisible: 4,
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
        this.photoService.getImages().then((images) => (this.images = images));
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
    @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;

  onMouseMove(event: MouseEvent): void {
    const imgElement = this.imageElement.nativeElement;
    const rect = imgElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    imgElement.style.transformOrigin = `${x}% ${y}%`;
  }
}
