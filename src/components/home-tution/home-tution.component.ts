import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tution',
  standalone: false,
  templateUrl: './home-tution.component.html',
  styleUrl: './home-tution.component.css'
})
export class HomeTutionComponent {
  homeTution = [
    {
      title: 'Expert Teachers',
      description: 'Highly specialized, experienced teachers that make learning fun',
      image: 'assets/homeTution/Img1.jpeg'
    },
    {
      title: 'Learning From Home',
      description: 'Save energy, time, money wasted in travelling. Learn at your home; safety & comfort guaranteed!',
      image: 'assets/homeTution/Img2.jpeg'
    },
    {
      title: 'Customized Teaching',
      description: 'Personalised education, tailored to the grasping power of the student. Eventually, it’s all about you!',
      image: 'assets/homeTution/Img3.jpeg'
    },
    {
      title: 'Flexible Timings',
      description: 'Learn at your pace with flexible class schedules that suit your lifestyle.',
      image: 'assets/homeTution/Img4.jpeg'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your performance and stay on top of your academic goals.',
      image: 'assets/homeTution/Img5.jpeg'
    },
    {
      title: 'Interactive Tools',
      description: 'Make learning fun and effective with digital tools and interactive sessions.',
      image: 'assets/homeTution/Img6.jpeg'
    }
  ];
}
