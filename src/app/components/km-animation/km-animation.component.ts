import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-km-animation',
  standalone: true,
  templateUrl: './km-animation.component.html',
  styleUrl: './km-animation.component.css'
})
export class KmAnimationComponent {
  @Input() firstWord!: string;
  @Input() secondWord!: string;
}
