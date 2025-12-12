import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorService } from './services/doctor.service';
import { Doctor } from './models/doctor.model';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    DoctorProfileComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  doctors: Doctor[] = [];
  showBackToTop = false;
  
  // Stats for counter animation
  stats = [
    { label: 'Years Experience', value: 6, suffix: '+', current: 0 },
    { label: 'Happy Patients', value: 1000, suffix: '+', current: 0 },
    { label: 'Successful Treatments', value: 500, suffix: '+', current: 0 },
    { label: 'Expert Doctors', value: 2, suffix: '', current: 0 }
  ];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
    
    this.doctors = this.doctorService.getAllDoctors();
    
    // Initialize stats counter when in view
    setTimeout(() => {
      this.animateStats();
    }, 1000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  animateStats(): void {
    this.stats.forEach((stat, index) => {
      this.animateValue(stat, 2000, index * 300);
    });
  }

  animateValue(stat: any, duration: number, delay: number): void {
    setTimeout(() => {
      let start = 0;
      const end = stat.value;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          stat.current = end;
          clearInterval(timer);
        } else {
          stat.current = Math.floor(start);
        }
      }, 16);
    }, delay);
  }
}