import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';

export const routes: Routes = [
//   { path: 'all-projects', component: AllProjectsComponent },
//   { path: '', redirectTo: '/all-projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
