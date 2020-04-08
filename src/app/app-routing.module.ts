import { NotFoundComponent } from './not-found/not-found.component';
import { GoalComponent } from './components/goal/goal.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path : 'about', component: AboutComponent},
  { path : 'goals', component: GoalComponent },
  { path : 'goals/:id', component: GoalComponent },
  { path : '**', component: NotFoundComponent },
  {path: '', redirectTo: '/goals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

