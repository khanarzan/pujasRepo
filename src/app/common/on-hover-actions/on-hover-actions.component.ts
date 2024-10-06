import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-hover-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-hover-actions.component.html',
  styleUrl: './on-hover-actions.component.scss'
})
export class OnHoverActionsComponent {
  @Input() showButtons: boolean = false;  // Default to true if not provided

}
