import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-routine-planner',
  imports: [HeaderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './routine-planner.component.html',
  styleUrl: './routine-planner.component.scss',
})
export class RoutinePlannerComponent {
  routineForm: FormGroup;
  category: FormControl;
  day: FormControl;
  exerciseInput?: string;
  activeDayExercises?: string;

  exercises: string[] = [];

  weekRoutine: {
    [key: string]: { category: string; day: string; exercises: string[] };
  } = {
    Monday: {
      category: 'Rest',
      day: 'Monday',
      exercises: ['Add Exercises for this day'],
    },
    Tuesday: {
      category: 'Rest',
      day: 'Tuesday',
      exercises: ['Add Exercises for this day'],
    },
    Wednesday: {
      category: 'Rest',
      day: 'Wednesday',
      exercises: ['Add Exercises for this day'],
    },
    Thursday: {
      category: 'Rest',
      day: 'Thursday',
      exercises: ['Add Exercises for this day'],
    },
    Friday: {
      category: 'Rest',
      day: 'Friday',
      exercises: ['Add Exercises for this day'],
    },
    Saturday: {
      category: 'Rest',
      day: 'Saturday',
      exercises: ['Add Exercises for this day'],
    },
    Sunday: {
      category: 'Rest',
      day: 'Sunday',
      exercises: ['Add Exercises for this day'],
    },
  };

  constructor() {
    this.category = new FormControl('');
    this.day = new FormControl('');

    this.routineForm = new FormGroup({
      category: this.category,
      day: this.day,
    });
  }

  setActiveDay(exerciseDay: string) {
    this.activeDayExercises =
      this.weekRoutine[exerciseDay].exercises.toString();
  }

  addExercise() {
    const exercise = this.exerciseInput;
    if (exercise !== '') {
      this.exercises.push(exercise ? exercise : '');
    }
    this.exerciseInput = '';
    console.log(this.exercises);
  }

  onSubmit() {
    const selectedDay = this.routineForm.get('day')?.value;
    const category = this.routineForm.get('category')?.value;

    if (selectedDay && category) {
      this.weekRoutine[selectedDay].category = category;
      this.weekRoutine[selectedDay].exercises = [...this.exercises];

      this.routineForm.reset();
      this.exercises = [];
    }
  }
}
