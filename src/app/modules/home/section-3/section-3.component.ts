import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss'
})
export class Section3Component {
  ngOnInit() {
    AOS.init();
  }
}
