import { Component, Input } from '@angular/core';
import { ExerciseInfo } from '../../models/ExerciseInfo';

@Component({
  selector: 'app-exercise-card',
  imports: [],
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss',
})
export class ExerciseCardComponent {
  @Input() exerciseInfo!: ExerciseInfo;
}
