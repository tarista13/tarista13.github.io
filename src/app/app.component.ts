import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobCardComponent, ProjectCardComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
