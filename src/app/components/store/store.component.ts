import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component'
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
