import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
//import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  schoolName = input.required<string>();
  major = input.required<string>();
  minor = input.required<string>();
  graduationDate = input.required<string>();
  location = input.required<string>();
  relatedCourses = input.required<string>();
  imageSrc = input.required<string>();
}
