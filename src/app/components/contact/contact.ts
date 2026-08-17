import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactDetails = [
    {
      label: 'Email',
      value: 'santhiyamathiyazhagan526@gmail.com',
      icon: '✉'
    },
    {
      label: 'GitHub',
      value: 'santhiyamathiyazhagan526-art',
      icon: '⌘'
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/santhiya-mathiyazhagan-a08b10280/',
      icon: 'in'
    }
  ];

}