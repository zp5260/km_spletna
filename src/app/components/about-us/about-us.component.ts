import { Component } from '@angular/core';
import { KmAnimationComponent } from '../km-animation/km-animation.component'
import {AboutUsFeedbacksComponent} from "../about-us-feedbacks/about-us-feedbacks.component";
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [KmAnimationComponent, AboutUsFeedbacksComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
