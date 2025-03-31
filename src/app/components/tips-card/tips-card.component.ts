import { Component, Input } from '@angular/core';
import { TipsInfo } from '../../models/TipsInfo';

@Component({
  selector: 'app-tips-card',
  imports: [],
  templateUrl: './tips-card.component.html',
  styleUrl: './tips-card.component.scss',
})
export class TipsCardComponent {
  @Input() tipsInfo!: TipsInfo;
}
