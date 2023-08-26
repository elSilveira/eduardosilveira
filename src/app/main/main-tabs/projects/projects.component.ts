import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  youtubeUrls = [
    {
      type: 'Ensinando como gostaria de ter aprendido (FrontEnd)',
      value: 'https://www.youtube.com/embed/videoseries?si=R4vuAm8IELwmYjVu&amp&list=PLDsQmT-Sg0HhD3folX_p8k0By9ZnxXgAY'
    },
    {
      type: 'Ensinando como gostaria de ter aprendido (BackEnd)',
      value: 'https://www.youtube.com/embed/videoseries?si=R4vuAm8IELwmYjVu&amp;list=PLDsQmT-Sg0Hjo0eHl0PmZxvy1lp50b9tW'
    },
    {
      type: 'Backend Node (Full Lives)',
      value: 'https://www.youtube.com/embed/videoseries?si=R4vuAm8IELwmYjVu&amp;list=PLDsQmT-Sg0HhcP8OXP6_6xz0i7XTRsFGN'
    },
    {
      type: 'Frontend Web + Angular (Full Lives)',
      value: 'https://www.youtube.com/embed/videoseries?si=R4vuAm8IELwmYjVu&amp;list=PLDsQmT-Sg0HhrtQyld_gwJBA80sbEzYfA'
    }
  ];
  ebooks = [
    {
      title: 'A Step By Step Guide',
      img: 'assets/stepbystep.png',
      url: 'assets/A-Step-by-Step-Guide.pdf'
    },
    {
      title: 'Mastering Angular Fundamentals',
      img: 'assets/Angular Fundamentals.png',
      url: 'assets/Mastering Angular Fundamentals.pdg'
    },
    {
      title: 'Architecture and Concepts',
      img: 'assets/Architecture and concepts.png',
      url: 'assets/Architecture and concepts.pdf'
    }
  ]
}
