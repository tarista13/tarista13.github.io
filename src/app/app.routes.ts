import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-projects', component: AllProjectsComponent },
  { path: 'project-description', component: ProjectDescriptionComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
