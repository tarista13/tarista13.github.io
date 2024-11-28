import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

export interface AllProjects {
  year: string;
  project: string;
  madeAt: string;
  builtWith: string;
  link: string;
}

const PROJECT_DATA: AllProjects[] = [
  { year: 'Summer 2024 - Present', project: 'Dealer Self Service/Quote Builder', madeAt: 'Steelcase', builtWith: 'ASP.NET Core', link:'https://www.steelcase.com/'},
  { year: 'Fall 2024 - Present', project: 'Calvin EMR', madeAt: 'CS396/398', builtWith: 'Angular', link:'https://calvin-emr.web.app/about-us'},
  { year: 'Fall 2024', project: 'Music Translator', madeAt: 'CS336', builtWith: 'Angular', link:'https://github.com/CS336-Final-Project'},
  { year: 'Fall 2024', project: 'Stats Project', madeAt: 'STAT245', builtWith: 'R', link:''},
  { year: 'Fall 2024', project: 'BlackJack', madeAt: 'DATA202', builtWith: 'Python', link:''},
  { year: 'Fall 2024', project: 'Relationship between Average Fastball Speed & Tommy John', madeAt: 'DATA202', builtWith: 'Python', link:'https://github.com/tarista13/DATA202/blob/main/Midterm%20Project/data-202-midterm-project.ipynb'},
  { year: 'Fall 2024', project: 'Assessing the Relationship Between Glycemic Status & Triglyceride Levels', madeAt: 'STAT245', builtWith: 'R', link:'https://github.com/tarista13/STAT245/blob/main/Exam1/Arista-Test1Revisions.pdf'},
  { year: 'Fall 2024', project: 'Chat-app', madeAt: 'CS336', builtWith: 'Angular & Firebase', link:'https://github.com/24FA-CS336-org/assignment-15-tarista13'},
  { year: 'Fall 2024', project: 'Pizza Ordering Form', madeAt: 'CS336', builtWith: 'HTML, CSS, JavaScript', link:'https://github.com/24FA-CS336-org/assignment-5-tarista13'},
  { year: 'In Progress', project: 'Baseball Analytics(In Progress)', madeAt: 'Personal', builtWith: '...', link:''},
  { year: 'In Progress', project: 'AI Essay Revision(In Progress)', madeAt: 'Personal', builtWith: '...', link:''},
  { year: 'Summer 2024', project: 'D3 KPI', madeAt: 'Steelcase', builtWith: 'Tableau', link:'https://www.steelcase.com/'},
  { year: 'Spring 2024', project: 'AI Generative Essay Revisions', madeAt: 'CS376', builtWith: 'Python', link:'https://github.com/tarista13/CS376-ML/tree/main/finalProject'},
  { year: 'Fall 2023', project: 'Mindful Knights', madeAt: 'CS232', builtWith: 'React Native', link:'https://github.com/calvin-cs262-fall2023-teamh'},
  { year: 'Summer 2023', project: 'Password Standard', madeAt: 'Steelcase', builtWith: 'Azure', link:'https://www.steelcase.com/'},
  { year: 'Fall 2022', project: 'AI Mancala', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Prog5'},
  { year: 'Fall 2022', project: 'Fractal Fern', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Fern'},
  { year: 'Fall 2022', project: 'Dutch Bingo', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Prog4'},
  { year: 'Fall 2022', project: 'Babble', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Project_2'},
  { year: 'Fall 2021', project: 'Brick Breaker', madeAt: 'CS108', builtWith: 'Python', link:'https://github.com/tarista13/Brick-Breaker'}
];

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent {
  displayedColumns: string[] = ['year', 'project', 'madeAt', 'builtWith', 'link'];
  dataSource = PROJECT_DATA;

  navigateToLink(link: string): void {
    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab
    }
  }
}