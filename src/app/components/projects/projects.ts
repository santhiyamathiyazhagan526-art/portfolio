import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    {
      title: 'Crop Yield Prediction',
      type: 'Machine Learning Project',

      description:
        'A machine learning project that predicts crop yield using agricultural and environmental factors such as rainfall, temperature, soil type, humidity, fertilizer usage, cultivation area and crop type.',

      technologies: [
        'Python',
        'Machine Learning',
        'Pandas',
        'Scikit-learn'
      ],

      icon: 'ML',

      github:
        'https://github.com/santhiyamathiyazhagan526-art'
    },

    {
      title: 'Akshayam 360 LMS',
      type: 'Learning Management System',

      description:
        'A Learning Management System developed for managing courses, lessons, modules, quizzes and student learning activities through a web-based platform.',

      technologies: [
        'Python',
        'Django',
        'HTML',
        'CSS',
        'JavaScript',
        'PostgreSQL'
      ],

      icon: 'LMS',

      github:
        'https://github.com/santhiyamathiyazhagan526-art'
    },

    {
      title: 'Visitor Management System',
      type: 'Internship Project — GTN Info Solutions',

      description:
        'A Visitor Management System developed during my internship at GTN Info Solutions to manage visitor information and streamline visitor entry and management activities.',

      technologies: [
        'Python',
        'Django',
        'HTML',
        'CSS',
        'JavaScript',
        'Database'
      ],

      icon: 'VMS',

      github:
        'https://github.com/santhiyamathiyazhagan526-art'
    }
  ];

}