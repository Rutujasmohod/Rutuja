import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mailId: string = "rutujamohod@gmail.com"
  mobileNo: string = "+91 88620 73593"

}
