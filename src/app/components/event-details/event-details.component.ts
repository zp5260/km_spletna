import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { Event } from '../../models/event.model';

import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EventDetailsComponent implements OnInit {
  event!: Event;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<Event[]>('assets/data/events.json').subscribe(data => {
        const found = data.find(e => e.id === id);
        if (found) {
          this.event = found;
        } else {
          console.error('Event not found with id:', id);
        }
      });
    }
  }

  openStripeLink() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.event.stripeLink, '_blank');
    }
  }
}
