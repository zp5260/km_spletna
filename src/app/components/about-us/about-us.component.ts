import { Component } from '@angular/core';
import { KmAnimationComponent } from '../km-animation/km-animation.component'
import {AboutUsFeedbacksComponent} from "../about-us-feedbacks/about-us-feedbacks.component";
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [KmAnimationComponent, AboutUsFeedbacksComponent, ButtonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
