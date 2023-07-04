import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  links = [
    { type: 'Email', value: 'contato@eduardosilveira.dev' },
    { type: 'Linkedin', value: 'https://www.linkedin.com/in/elsilveira' },
    { type: 'Twitter', value: 'https://twitter.com/el_silveira' }
 ]
}
