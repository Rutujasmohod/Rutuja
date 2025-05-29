import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  classes = [
    {
      title: 'Expert Teachers',
      description: 'Highly specialized, experienced teachers that make learning fun',
      image: 'assets/Classes/Img1.jpeg'
    },
    {
      title: 'Learning From Home',
      description: 'Save energy, time, money wasted in travelling. Learn at your home; safety & comfort guaranteed!',
      image: 'assets/Classes/Img2.jpeg'
    },
    {
      title: 'Customized Teaching',
      description: 'Personalised education, tailored to the grasping power of the student. Eventually, it’s all about you!',
      image: 'assets/Classes/Img3.jpeg'
    },
    {
      title: 'Flexible Timings',
      description: 'Learn at your pace with flexible class schedules that suit your lifestyle.',
      image: 'assets/Classes/Img1.jpeg'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your performance and stay on top of your academic goals.',
      image: 'assets/Classes/Img2.jpeg'
    },
    {
      title: 'Interactive Tools',
      description: 'Make learning fun and effective with digital tools and interactive sessions.',
      image: 'assets/Classes/Img3.jpeg'
    }
  ];
}

