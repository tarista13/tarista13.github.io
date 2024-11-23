import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobCardComponent } from '../job-card/job-card.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { EducationComponent } from '../education/education.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, JobCardComponent, ProjectCardComponent, EducationComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
