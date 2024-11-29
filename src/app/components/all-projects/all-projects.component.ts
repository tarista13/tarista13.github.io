import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { ProjectDescriptionComponent } from '../project-description/project-description.component';

export interface AllProjects {
  year: string;
  project: string;
  description: string;
  madeAt: string;
  builtWith: string;
  link: string;
  image: string;
}

const PROJECT_DATA: AllProjects[] = [
  { year: 'Summer 2024 - Present', project: 'Dealer Self Service/Quote Builder', description:'', madeAt: 'Steelcase', builtWith: 'ASP.NET Core', link:'https://www.steelcase.com/', image:''},
  { year: 'Fall 2024 - Present', project: 'Calvin EMR', description:'', madeAt: 'CS396/398', builtWith: 'Angular', link:'https://calvin-emr.web.app/about-us', image:''},
  { year: 'Fall 2024', project: 'Music Translator', description:'', madeAt: 'CS336', builtWith: 'Angular & Firebase', link:'https://github.com/CS336-Final-Project', image:''},
  { year: 'In Progress', project: 'Sports Card Analyzer', description:'', madeAt: 'Personal', builtWith: 'ReactNative & Azure', link:'https://github.com/Sport-Card-Price-Analyzer', image:''},
  { year: 'Fall 2024', project: 'Stats Project', description:'', madeAt: 'STAT245', builtWith: 'R', link:'', image:''},
  { year: 'Fall 2024', project: 'BlackJack', description:'', madeAt: 'DATA202', builtWith: 'Python', link:'', image:''},
  { year: 'Fall 2024', project: 'Relationship between Average Fastball Speed & Tommy John',description:'', madeAt: 'DATA202', builtWith: 'Python', link:'https://github.com/tarista13/DATA202/blob/main/Midterm%20Project/data-202-midterm-project.ipynb', image:''},
  { year: 'Fall 2024', project: 'Assessing the Relationship Between Glycemic Status & Triglyceride Levels',description:'', madeAt: 'STAT245', builtWith: 'R', link:'https://github.com/tarista13/STAT245/blob/main/Exam1/Arista-Test1Revisions.pdf', image:''},
  { year: 'Fall 2024', project: 'Chat-app', description:'', madeAt: 'CS336', builtWith: 'Angular & Firebase', link:'https://github.com/24FA-CS336-org/assignment-15-tarista13', image:''},
  { year: 'Fall 2024', project: 'Pizza Ordering Form', description:'', madeAt: 'CS336', builtWith: 'HTML, CSS, JavaScript', link:'https://github.com/24FA-CS336-org/assignment-5-tarista13', image:''},
  { year: 'In Progress', project: 'Baseball Analytics(In Progress)', description:'', madeAt: 'Personal', builtWith: 'Django', link:'https://github.com/Sports-Performance-Prediction', image:''},
  { year: 'In Progress', project: 'AI Essay Revision(In Progress)', description:'', madeAt: 'Personal', builtWith: 'React', link:'https://github.com/AI-Essay-Revision', image:''},
  { year: 'Summer 2024', project: 'D3 KPI', description:'', madeAt: 'Steelcase', builtWith: 'Tableau', link:'https://www.steelcase.com/', image:''},
  { year: 'Spring 2024', project: 'AI Generative Essay Revisions', description:'', madeAt: 'CS376', builtWith: 'Python', link:'https://github.com/tarista13/CS376-ML/tree/main/finalProject', image:''},
  { year: 'Fall 2023', project: 'Mindful Knights', description:'', madeAt: 'CS232', builtWith: 'React Native', link:'https://github.com/calvin-cs262-fall2023-teamh', image:''},
  { year: 'Summer 2023', project: 'Password Standard', description:'', madeAt: 'Steelcase', builtWith: 'Azure', link:'https://www.steelcase.com/', image:''},
  { year: 'Fall 2022', project: 'AI Mancala', description:'', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Prog5', image:''},
  { year: 'Fall 2022', project: 'Fractal Fern', description:'', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Fern', image:''},
  { year: 'Fall 2022', project: 'Dutch Bingo', description:'', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Prog4', image:''},
  { year: 'Fall 2022', project: 'Babble', description:'', madeAt: 'CS212', builtWith: 'C#', link:'https://github.com/tarista13/CS212/tree/main/Project_2', image:''},
  { year: 'Fall 2021', project: 'Brick Breaker', description:'', madeAt: 'CS108', builtWith: 'Python', link:'https://github.com/tarista13/Brick-Breaker', image:''}
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

  constructor(private router: Router) {}
  navigateToProject(project: AllProjects): void {
    this.router.navigate(['/project-description'], {
      queryParams: {
        name: project.project,
        description: project.description || '',
        year: project.year || '',
        madeAt: project.madeAt || '',
        builtWith: project.builtWith || '',
        link: project.link || '',
        image: project.image || '',
      },
    });
  }  
}