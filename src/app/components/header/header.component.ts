import {RouterLink, RouterLinkActive} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(
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
  }

  menuValue: boolean = false;
  menuIcon: string='bi bi-list';

  openMenu() {
    this.menuValue  = !this.menuValue;
    this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'bi bi-list';
  }
}
