import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  @Input() title = '';
  @Input() shortDesc = '';
  @Input() price = '';
  @Input() imageUrl = '';
  @Input() show = false;
  @Input() close: () => void = () => {};
}
