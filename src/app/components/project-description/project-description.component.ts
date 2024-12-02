import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  imports: [RouterLink],
  standalone: true,
  styleUrls: ['./project-description.component.css'],
})
export class ProjectDescriptionComponent implements OnInit {
  projectDetails: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectDetails = {
        name: params['name'],
        description: params['description'],
        year: params['year'],
        madeAt: params['madeAt'],
        builtWith: params['builtWith'],
        link: params['link'],
        image: params['image'],
      };
    });
  }
}