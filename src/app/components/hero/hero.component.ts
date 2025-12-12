import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  doctor1!: Doctor;
  doctor2!: Doctor;
  
  // Typewriter Text Variables
  txtDegree1: string = '';
  txtDegree2: string = '';
  txtHero: string = '';
  heroTexts: string[] = [
    'Expert Orthopedic & ENT Care',
    'Compassionate Family Healthcare',
    'Advanced Medical Treatments',
    'Your Health, Our Priority'
  ];
  currentHeroTextIndex: number = 0;
  isDeleting: boolean = false;
  isPaused: boolean = false;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    const doctors = this.doctorService.getAllDoctors();
    this.doctor1 = doctors.find(d => d.id === 1) || doctors[0];
    this.doctor2 = doctors.find(d => d.id === 2) || doctors[1];

    // Start Typewriter Effects
    this.startTypewriterEffect();
    
    // Start Hero Text Typewriter
    this.typeHeroText();
  }

  startTypewriterEffect(): void {
    // First doctor degree animation
    setTimeout(() => {
      this.typeWriter(this.doctor1.degrees.join(', '), (str) => this.txtDegree1 = str, 50);
    }, 500);
    
    // Second doctor degree animation
    setTimeout(() => {
      this.typeWriter(this.doctor2.degrees.join(', '), (str) => this.txtDegree2 = str, 50);
    }, 1500);
  }

  typeWriter(text: string, updateFunc: (val: string) => void, speed: number): void {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        updateFunc(text.substring(0, i + 1));
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  }

  typeHeroText(): void {
    const text = this.heroTexts[this.currentHeroTextIndex];
    let speed = 100;
    
    if (this.isDeleting) {
      speed = 50;
    }

    if (!this.isDeleting && this.txtHero === text) {
      // Pause at end
      this.isPaused = true;
      setTimeout(() => {
        this.isPaused = false;
        this.isDeleting = true;
        this.typeHeroText();
      }, 2000);
      return;
    }

    if (this.isDeleting && this.txtHero === '') {
      this.isDeleting = false;
      this.currentHeroTextIndex = (this.currentHeroTextIndex + 1) % this.heroTexts.length;
      setTimeout(() => this.typeHeroText(), 500);
      return;
    }

    const delta = this.isDeleting ? -1 : 1;
    this.txtHero = text.substring(0, this.txtHero.length + delta);
    
    setTimeout(() => this.typeHeroText(), speed);
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  // ADD THIS METHOD - Image Error Handler for Hero Section
  onHeroImageError(event: Event, gender: 'male' | 'female'): void {
    const imgElement = event.target as HTMLImageElement;
    
    // Set a fallback icon or placeholder
    if (gender === 'female') {
      imgElement.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiM1N2NjOTkiIHJ4PSIyMCIvPjxwYXRoIGQ9Ik0xMDAgNzVDMTEwLjM1NSA3NSAxMTggODIuNjQ1IDExOCA5M1MxMTAuMzU1IDExMSAxMDAgMTExUzgyIDEwMy4zNTUgODIgOTNTODkuNjQ1IDc1IDEwMCA3NXoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNNzAgMTIwTDEzMCAxMjBNMTAwIDEyMEwxMDAgMTUwTTEwMCAxNTBMMTAwIDE3ME04NSAxNzBMMTE1IDE3ME0xMDAgMTIwQzkwIDExMCA4MCAxMjAgMTAwIDEyMEMxMjAgMTIwIDExMCAxMTAgMTAwIDEyMFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=';
    } else {
      imgElement.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxYTVmN2EiIHJ4PSIyMCIvPjxwYXRoIGQ9Ik0xMDAgNzVDMTEwLjM1NSA3NSAxMTggODIuNjQ1IDExOCA5M1MxMTAuMzU1IDExMSAxMDAgMTExUzgyIDEwMy4zNTUgODIgOTNTODkuNjQ1IDc1IDEwMCA3NXoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNNzAgMTIwTDEzMCAxMjBNMTAwIDEyMEwxMDAgMTUwTTEwMCAxNTBMMTAwIDE3ME04NSAxNzBMMTE1IDE3ME0xMDAgMTIwQzkwIDExMCA4MCAxMjAgMTAwIDEyMEMxMjAgMTIwIDExMCAxMTAgMTAwIDEyMFoiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=';
    }
    
    // Add a class for styling
    imgElement.classList.add('default-hero-image');
    
    console.log(`Hero image failed to load for ${gender} doctor, using fallback`);
  }
}