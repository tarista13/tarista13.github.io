// navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule if needed
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  activeSection: string = 'about';

  constructor() {}

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['about', 'education', 'experience', 'projects'];
    let foundSection = 'about';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          foundSection = section;
          break;
        }
      }
    }

    this.activeSection = foundSection;
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}