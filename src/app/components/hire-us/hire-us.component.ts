import { Component } from '@angular/core';
import {KmAnimationComponent} from "../km-animation/km-animation.component";
import {HireUsCardsContainerComponent} from "../hire-us-cards-container/hire-us-cards-container.component";

@Component({
  selector: 'app-hire-us',
  standalone: true,
  imports: [
    KmAnimationComponent,
    HireUsCardsContainerComponent
  ],
  templateUrl: './hire-us.component.html',
  styleUrl: './hire-us.component.css'
})
export class HireUsComponent {

}
