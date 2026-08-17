import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

  education = [

    {
      degree: 'Master of Computer Applications',
      field: 'MCA',
      institution: 'Currently Pursuing',
      period: 'Present',
      description:
        'Currently pursuing MCA with a focus on programming, web development, software technologies and application development.'
    },

    {
      degree: 'Bachelor’s Degree',
      field: 'Computer Science',
      institution: 'P.K.R. Arts College for Women',
      period: '2022 - 2025',
      description:
        'Completed undergraduate studies with a focus on programming, web development, databases and software technologies.'
    }

  ];

}