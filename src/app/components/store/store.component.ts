import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // tukaj je SwiperModule
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class StoreComponent implements OnInit {
  selectedProduct: Product | null = null;
  products: Product[] = [];
  isMobile: boolean = false;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.http.get<Product[]>('assets/data/produkti.json').subscribe(data => {
      this.products = data;
    });

    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;

      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
      });
    }
  }

  openModal(product: Product) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  goToStripeLink() {
    if (this.selectedProduct?.stripeLink) {
      window.open(this.selectedProduct.stripeLink, '_blank'); // ali '_self' za isto okno
    }
  }

}
