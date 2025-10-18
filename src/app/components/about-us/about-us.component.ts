import { Component } from '@angular/core';
import { KmAnimationComponent } from '../km-animation/km-animation.component'
import {AboutUsDetailsComponent} from "../about-us-details/about-us-details.component";
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [KmAnimationComponent, AboutUsDetailsComponent, ButtonModule, RouterLink, RouterLinkActive,],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
