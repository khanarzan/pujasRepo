import { Component } from '@angular/core';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section-5',
  standalone: true,
  imports: [],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.scss'
})
export class Section5Component {
  ngOnInit() {
    AOS.init();
  }
}
