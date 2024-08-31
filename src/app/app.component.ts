import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from './productservice';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
 
}
