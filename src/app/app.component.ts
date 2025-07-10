import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component'
import {ContactUsComponent} from './components/contact-us/contact-us.component'
import {TicketsStoreComponent} from './components/tickets-store/tickets-store.component'
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactUsComponent, RouterLink, RouterLinkActive, FooterComponent, TicketsStoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
