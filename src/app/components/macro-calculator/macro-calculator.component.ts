import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CalculatorComponent } from '../calculator/calculator.component';
@Component({
  selector: 'app-macro-calculator',
  imports: [HeaderComponent, CalculatorComponent],
  templateUrl: './macro-calculator.component.html',
  styleUrl: './macro-calculator.component.scss',
})
export class MacroCalculatorComponent {}
