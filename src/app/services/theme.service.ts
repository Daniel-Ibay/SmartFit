import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }

  getTheme(): String {
    const savedTheme = localStorage.getItem(this.themeKey);
    console.log(savedTheme);
    return savedTheme ? savedTheme : 'default';
  }
}
