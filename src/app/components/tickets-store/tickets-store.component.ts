import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';


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
  tickets: Ticket[] = [];

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
      this.http.get<Ticket[]>('assets/data/tickets.json').subscribe(data => {
        this.tickets = data;
      });
  }

}
