import { Component } from '@angular/core';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section-7',
  standalone: true,
  imports: [],
  templateUrl: './section-7.component.html',
  styleUrl: './section-7.component.scss',
})
export class Section7Component {
  ngOnInit() {
    AOS.init();
  }
}
