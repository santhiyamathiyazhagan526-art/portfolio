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
      value: 'your-email@example.com',
      icon: '✉'
    },
    {
      label: 'GitHub',
      value: 'santhiyamathiyazhagan526-art',
      icon: '⌘'
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      icon: 'in'
    }
  ];

}