import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  roles: string[] = [
    'Python Developer',
    'Web Developer',
    'Django Developer'
  ];

  currentRole = this.roles[0];

  private roleIndex = 0;

  private roleInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {

    this.roleInterval = setInterval(() => {

      this.roleIndex =
        (this.roleIndex + 1) % this.roles.length;

      this.currentRole =
        this.roles[this.roleIndex];

    }, 2500);

  }

  ngOnDestroy(): void {

    if (this.roleInterval) {
      clearInterval(this.roleInterval);
    }

  }

}