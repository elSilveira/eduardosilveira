import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public skills = [
    {
      type: 'web', typeId: 0, skills: [
        { name: 'HTML', time: '7 years' },
        { name: 'CSS', time: '7 years' },
        { name: 'JavaScript', time: '7 years' },
        { name: 'Typescript', time: '5 years' },
        { name: 'Angular', time: '5 years' },
        { name: 'Dart', time: '2 year' },
        { name: 'AngularDart', time: '2 year' },
        { name: 'AngularJS', time: '1 years' }
      ]
    },
    {
      type: 'web', typeId: 0, skills: [
        { name: 'Agile', time: '6 years' },
        { name: 'Scrum', time: '6 years' },
        { name: 'NGRX', time: '4 years' },
        { name: 'Git', time: '4 years' },
        { name: 'SQL', time: '4 years' },
      ]
    },
    {
      type: 'web', typeId: 0, skills: [
        { name: 'C#', time: '3 years' },
        { name: '.NET Forms', time: '2 years' },
        { name: 'Xamarin', time: '2 years' },
        { name: 'Flex', time: '2 years' }
      ]
    }
  ]
}
