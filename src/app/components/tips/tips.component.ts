import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TipsCardComponent } from '../tips-card/tips-card.component';
import { tipsInfo } from '../../../assets/data/tips';

@Component({
  selector: 'app-tips',
  imports: [HeaderComponent, TipsCardComponent],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss',
})
export class TipsComponent {
  protected tipsData = tipsInfo;
}
