import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, NgClass, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeValue: String = '';

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
    this.themeValue = this.themeService.getTheme();
  }
}
