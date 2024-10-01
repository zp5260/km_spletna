import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { KmAnimationComponent } from './components/km-animation/km-animation.component'
import { HeaderComponent } from './components/header/header.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactUsComponent, RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
