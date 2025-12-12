import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  clinicLocation = {
    lat: 18.5993,
    lng: 73.7625,
    address: '123 Medical Street, Wakad, Pune, Maharashtra - 411057'
  };
}