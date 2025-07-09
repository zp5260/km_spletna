import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { Event } from '../../models/event.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tickets-store',
  standalone: true,
  imports: [CommonModule, TicketCardComponent],
  templateUrl: './tickets-store.component.html',
  styleUrl: './tickets-store.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class TicketsStoreComponent implements OnInit{
  tickets: Event[] = [];

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
      this.http.get<Event[]>('assets/data/events.json').subscribe(data => {
        this.tickets = data;
      });
  }

  goToEventDetails(id: string): void {
    this.router.navigate(['/tickets-store', id]);
  }

}
