import { Component } from '@angular/core';

@Component({
  selector: 'copilot',
  templateUrl: './copilot.component.html',
  styleUrls: ['./copilot.component.scss']
})
export class CopilotComponent {
  links = [
    { type: 'Email', value: 'contato@eduardosilveira.dev' },
    { type: 'Linkedin', value: 'https://www.linkedin.com/in/elsilveira' },
    { type: 'Twitter', value: 'https://twitter.com/el_silveira' }
 ]
}
