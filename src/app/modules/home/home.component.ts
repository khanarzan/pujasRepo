import { Component } from '@angular/core';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';
import { Section5Component } from './section-5/section-5.component';
import { Section6Component } from './section-6/section-6.component';
import { Section7Component } from './section-7/section-7.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MegaMenuModule } from 'primeng/megamenu';
import AOS from 'aos'; //AOS - 1
import { TestomonialComponent } from './testomonial/testomonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    MegaMenuModule,
    CommonModule,
    CarouselModule,
    ButtonModule,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    TestomonialComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngOnInit() {
    AOS.init({});//AOS - 2
  }
}
