import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Nikhil Pradeep Panpatte',
      gender: 'male',
      specialization: 'Orthopedic Surgeon',
      degrees: ['MBBS', 'DNB - Orthopedics'],
      experience: {
        total: 8,
        asSpecialist: 2
      },
      registration: {
        number: '2015052427',
        council: 'Maharashtra Medical Council',
        year: 2015
      },
      education: [
        {
          degree: 'MBBS',
          institution: 'Maharashtra University of Health Sciences, Nashik',
          year: 2015
        },
        {
          degree: 'DNB - Orthopedics',
          institution: 'National Board of Examination, India',
          year: 2021
        }
      ],
      services: [
        'Joint Replacement',
        'Trauma Care',
        'Arthroscopy',
        'Spine Therapy',
        'Fracture Treatment',
        'Sports Injuries'
      ],
      hospital: {
        name: 'Ashraya Hospital',
        address: 'Jadhav Corner, Kala Khadak',
        landmark: 'Above Tatva Hotel',
        city: 'Pune',
        rating: 4.0,
        location: {
          lat: 18.5993,
          lng: 73.7625
        }
      },
      schedule: [
        { day: 'Monday - Sunday', timing: '03:00 PM - 06:00 PM' },
        { day: 'Emergency', timing: '24/7 Available' }
      ],
      contact: {
        phone: '+91-9876543210',
        email: 'dr.nikhil@panpatteclinic.com',
        whatsapp: '919876543210'
      },
      consultationFee: 500,
      imageUrl: 'assets/images/dr-nikhil.png',
      description: 'Specialist in Orthopedic Surgery with expertise in Trauma, Joint Replacement, and Arthroscopic Surgeries. Committed to providing personalized care with modern medical techniques.',
      rating: 4.8,
      featured: true,
      qna: [
        {
          question: 'Where does Dr. Nikhil practice?',
          answer: 'Dr. Nikhil practices at Ashraya Hospital in Wakad, Pune.'
        },
        {
          question: 'What are the consultation hours?',
          answer: 'Regular consultation: 3 PM - 6 PM daily. Emergency services available 24/7.'
        }
      ]
    },
    {
      id: 2,
      name: 'Dr. Priyanka Bhoyar Panpatte',
      gender: 'female',
      specialization: 'ENT Surgeon',
      degrees: ['MBBS', 'MS ENT'],
      experience: {
        total: 7,
        asSpecialist: 4
      },
      registration: {
        number: '2016051847',
        council: 'Maharashtra Medical Council',
        year: 2016
      },
      education: [
        {
          degree: 'MBBS',
          institution: 'Maharashtra University of Health Sciences',
          year: 2016
        },
        {
          degree: 'MS ENT',
          institution: 'BJ Medical College, Pune',
          year: 2020
        }
      ],
      services: [
        'Sinusitis Treatment',
        'Hearing Loss Management',
        'Vertigo Treatment',
        'Tonsillitis Surgery',
        'Allergy Management',
        'Voice Problems',
        'Endoscopic Sinus Surgery'
      ],
      hospital: {
        name: 'Panpatte ENT Clinic',
        address: 'Wakad-Hinjewadi Road',
        landmark: 'Near IT Parks',
        city: 'Pune',
        rating: 4.7,
        location: {
          lat: 18.6161,
          lng: 73.7286
        }
      },
      schedule: [
        { day: 'Monday - Saturday', timing: '09:00 AM - 01:00 PM' },
        { day: 'Monday - Saturday', timing: '04:00 PM - 08:00 PM' },
        { day: 'Sunday', timing: '10:00 AM - 02:00 PM' }
      ],
      contact: {
        phone: '+91-9876543212',
        email: 'dr.priyanka@panpatteclinic.com',
        whatsapp: '919876543212'
      },
      consultationFee: 400,
  
      imageUrl: 'assets/images/dr-priyanka.png',
      description: 'Consultant ENT Surgeon offering advanced ear, nose, and throat care with a focus on accurate diagnosis, modern treatment, and compassionate follow-up for all age groups.',
      rating: 4.9,
      featured: true,
      qna: [
        {
          question: 'What conditions does Dr. Priyanka treat?',
          answer: 'She treats sinusitis, hearing loss, vertigo, tonsillitis, allergies, voice problems, and provides routine ENT check-ups for all age groups.'
        },
        {
          question: 'Where is the clinic located?',
          answer: 'Conveniently located in Wakad-Hinjewadi area with easy access for IT professionals and families across Pune.'
        }
      ]
    }
  ];

  constructor() { }

  getAllDoctors(): Doctor[] {
    return this.doctors;
  }

  getFeaturedDoctors(): Doctor[] {
    return this.doctors.filter(doctor => doctor.featured);
  }

  getDoctorById(id: number): Doctor | undefined {
    return this.doctors.find(doctor => doctor.id === id);
  }

  getDoctorsBySpecialization(specialization: string): Doctor[] {
    return this.doctors.filter(doctor => 
      doctor.specialization.toLowerCase().includes(specialization.toLowerCase())
    );
  }
}