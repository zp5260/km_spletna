import { Component } from '@angular/core';
import { ContactDataBoxComponent } from '../contact-data-box/contact-data-box.component'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactDataBoxComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
