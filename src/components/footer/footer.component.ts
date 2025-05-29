import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = [
    'Home', 'Privacy Policy', 'Refund and Returns Policy',
    'Terms & Conditions', 'Coaching Classes in Pune',
    'City Pages', 'FAQ’S', 'About', 'Contact'
  ];
}
