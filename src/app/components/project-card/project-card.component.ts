import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
//import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  name = input.required<string>();
  subtitle = input.required<string>();
  description = input.required<string>();
  link = input.required<string>();
  skills = input.required<string[]>();

  get iterableSkills(): string[] {
    return this.skills();
  }
}
