import { Component } from '@angular/core';

@Component({
  selector: 'app-first-step',
  standalone: false,
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.css'
})
export class FirstStepComponent {
  features = [
    { icon: 'assets/FirstStep/home.png', title: 'Learn from Home' },
    { icon: 'assets/FirstStep/funtech.png', title: 'Find Teachers with Authentic Ratings' },
    { icon: 'assets/FirstStep/language.png', title: 'Free Demo Class' },
    { icon: 'assets/FirstStep/Learn-from-Home.png', title: 'Learn while you have fun' },
    { icon: 'assets/FirstStep/learn.png', title: 'Classes for School & College Students' },
  ];
  text =`Are you looking for a trusted and effective tuition program that helps students truly understand and excel in their studies? Our coaching classes for Grades 1 to 12 are now open for admissions — and we are here to give every student the support they need to succeed academically and personally.

        At our institute, we focus on age-appropriate and syllabus-based content to ensure that students stay aligned with their school curriculum while developing a deeper understanding of the subjects. Whether your child needs support in Math, Science, English, or any core subject, our dedicated tutors provide personalized guidance for every learning level.
        
        We don’t believe in rote learning. Our interactive teaching methods engage students actively in lessons, making learning enjoyable and effective. Through regular quizzes, fun activities, and concept-based learning, we help students build confidence and problem-solving skills.
        
        Education is constantly evolving — and so are we. With regular updates and fresh content, our teaching material remains relevant and up-to-date with the latest academic trends and exam patterns.
        
        Safety and comfort are our priorities too. Our coaching is offered in three flexible modes: home tuition, online classes, and offline sessions at our center. Each option includes a safe, child-friendly interface and environment, ensuring peace of mind for parents.
        
        Your child deserves the best start. With our expert tutors, engaging curriculum, and strong support system, they’ll not just improve grades — they’ll build a love for learning.`
        
}
