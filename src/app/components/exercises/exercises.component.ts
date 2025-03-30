import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ExerciseCardComponent } from '../exercise-card/exercise-card.component';
import { exerciseInfo } from '../../../assets/data/exercises';

@Component({
  selector: 'app-exercises',
  imports: [HeaderComponent, ExerciseCardComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
})
export class ExercisesComponent {
  protected exercisesData = exerciseInfo;
}
