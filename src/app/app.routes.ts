import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { TipsComponent } from './components/tips/tips.component';
import { MacroCalculatorComponent } from './components/macro-calculator/macro-calculator.component';
import { RoutinePlannerComponent } from './components/routine-planner/routine-planner.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'exercises',
    component: ExercisesComponent,
  },
  {
    path: 'tips',
    component: TipsComponent,
  },
  {
    path: 'macro-calculator',
    component: MacroCalculatorComponent,
  },
  {
    path: 'routine-planner',
    component: RoutinePlannerComponent,
  },
];
