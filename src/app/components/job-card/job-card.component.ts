import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
//import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  jobTitle = input.required<string>();
  companyName = input.required<string>();
  location = input.required<string>();
  startDate = input.required<string>();
  endDate = input.required<string>();
  jobDescription = input.required<string>();
  link = input.required<string>();
}
