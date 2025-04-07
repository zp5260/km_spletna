import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() shortDesc!: string;
  @Input() price!: string;
  @Input() imageUrl!: string;
}
