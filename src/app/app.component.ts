import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from './productservice';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isLoading = true;

  ngOnInit() {
    // Set timeout to remove loader after 10 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 5000); // 10000 milliseconds = 10 seconds
  }
}
