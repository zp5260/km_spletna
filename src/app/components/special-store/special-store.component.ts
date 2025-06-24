import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { TextPart } from '../../models/product.model';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-special-store',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, TranslateModule], // tukaj je SwiperModule
  templateUrl: './special-store.component.html',
  styleUrl: './special-store.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SpecialStoreComponent implements OnInit {
  selectedProduct: Product | null = null;
  products: Product[] = [];
  isMobile: boolean = false;

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language;
      this.translate.setDefaultLang('sl');
      this.translate.use(browserLang.startsWith('sl') ? 'sl' : 'en');
    } else {
      // Fallback jezik na strežni strani
      this.translate.setDefaultLang('sl');
      this.translate.use('sl');
    }

    this.http.get<Product[]>('assets/data/special-produkti.json').subscribe(data => {
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
