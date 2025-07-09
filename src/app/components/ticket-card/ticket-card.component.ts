import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css'
})
export class TicketCardComponent {
  @Input() title!: string;
  @Input() shortDesc!: string;
  @Input() date!: string;
  @Input() time!: string;
  @Input() price!: string;
  @Input() imgUrl!: string;
}
