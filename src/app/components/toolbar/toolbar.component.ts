import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isDarkMode = false;

  constructor() {}

  ngOnInit(): void {
    const storedDarkMode = localStorage.getItem('navbarDarkMode');
    if (storedDarkMode === 'true') {
      this.isDarkMode = true;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('navbarDarkMode', String(this.isDarkMode));
  }
}
