import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  experiences = [
    {
      company: 'GTN Info Solutions',
      role: 'Web Developer Intern',
      type: 'Internship',

      description:
        'Worked on web application development and developed a Visitor Management System (VMS) during the internship.',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'MySQL'
      ],

      period: 'Internship'
    },

    {
      company: 'Akshayam 360 Global Learning System',
      role: 'Web Developer',
      type: 'Internship',

      description:
        'Worked on a Learning Management System and developed modules for courses, lessons, modules, quizzes and student management.',

      technologies: [
        'Python',
        'Django',
        'HTML',
        'CSS',
        'JavaScript',
        'PostgreSQL'
      ],

      period: 'Internship'
    }
  ];

}