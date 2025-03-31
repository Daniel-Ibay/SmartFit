import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  sex: string = '';
  years?: number;
  height?: number;
  weight?: number;
  activity?: string = '';
  allFields?: boolean;
  calories?: number;
  cutCalories?: number;
  bulkCalories?: number;

  activeWoman: boolean = false;
  activeMan: boolean = false;

  activeSedentary: boolean = false;
  activeLight: boolean = false;
  activeModerate: boolean = false;
  activeHigh: boolean = false;

  setSex(sex: string) {
    this.sex = sex;
    this.activeWoman = sex === 'woman';
    this.activeMan = sex === 'man';
  }

  setActivity(activity: string) {
    this.activity = activity;
    this.activeSedentary = activity === 'sedentary';
    this.activeLight = activity === 'light';
    this.activeModerate = activity === 'moderate';
    this.activeHigh = activity === 'high';
  }

  activityValue(): number {
    switch (this.activity) {
      case 'sedentary':
        return 1.2;
      case 'light':
        return 1.35;
      case 'moderate':
        return 1.55;
      case 'high':
        return 1.725;
      default:
        return 0;
    }
  }

  calculteCalories(): void {
    if (
      this.sex === 'man' &&
      this.weight != null &&
      this.height != null &&
      this.years != null
    ) {
      this.calories = Math.round(
        (66.5 +
          13.75 * this.weight +
          5.003 * this.height -
          6.755 * this.years) *
          this.activityValue()
      );
    } else if (
      this.sex === 'woman' &&
      this.weight != null &&
      this.height != null &&
      this.years != null
    ) {
      this.calories = Math.round(
        (655.1 +
          9.563 * this.weight +
          1.85 * this.height -
          4.676 * this.years) *
          this.activityValue()
      );
    } else {
    }

    this.bulkCalories = this.calories ? this.calories + 300 : undefined;

    this.cutCalories = this.calories ? this.calories - 350 : undefined;
  }

  checkFields(): void {
    const isSexValid = this.sex !== '';
    const isActivityValid = this.activity !== '';
    const isAgeValid =
      this.years !== undefined && this.years >= 0 && this.years <= 120;
    const isHeightValid =
      this.height !== undefined && this.height >= 0 && this.height <= 240;
    const isWeightValid =
      this.weight !== undefined && this.weight >= 0 && this.weight <= 240;

    console.log(this.activeMan, this.activeWoman, this.sex);

    this.allFields =
      isSexValid &&
      isActivityValid &&
      isAgeValid &&
      isHeightValid &&
      isWeightValid;
    if (this.allFields) {
      this.calculteCalories();
    }
  }
}
