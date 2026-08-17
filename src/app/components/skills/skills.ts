import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills = [
    {
      name: 'Python',
      category: 'Programming'
    },
    {
      name: 'HTML',
      category: 'Frontend'
    },
    {
      name: 'CSS',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      category: 'Frontend'
    },
    {
      name: 'Angular',
      category: 'Frontend'
    },
    {
      name: 'Django',
      category: 'Backend'
    },
    {
      name: 'PHP',
      category: 'Backend'
    },
    {
      name: 'MySQL',
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      category: 'Database'
    }
  ];

}