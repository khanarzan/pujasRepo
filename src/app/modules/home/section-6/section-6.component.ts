import { Component } from '@angular/core';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section-6',
  standalone: true,
  imports: [],
  templateUrl: './section-6.component.html',
  styleUrl: './section-6.component.scss'
})
export class Section6Component {
  ngOnInit() {
    AOS.init();
  }
}
