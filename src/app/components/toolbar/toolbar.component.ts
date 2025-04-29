import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) { }

  // @@@@@@@@@@@@@@ ROUTES @@@@@@@@@@@@@@@@@@
  navigateToPinned() {
    this.router.navigate(['/pinned']);
  }

  navigateToAllNotes() {
    this.router.navigate(['/all-notes']);
  }


  // @@@@@@@@@@@@@@@ SIDENAV @@@@@@@@@@@@@@@
  opened = false;
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>();

  onMenuClick(): void {
    this.toggleSidenav.emit();
  }

  // @@@@@@@@@@@@@@@ DARK MODE @@@@@@@@@@@@@@@
  isDarkMode = false;

  ngOnInit(): void {
    const storedDarkModeNavbar = localStorage.getItem('navbarDarkMode');
    const storedDarkModeSidenav = localStorage.getItem('sidenavDarkMode');
    if (storedDarkModeNavbar === 'true' && storedDarkModeSidenav === 'true') {
      this.isDarkMode = true;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('navbarDarkMode', String(this.isDarkMode));
    localStorage.setItem('sidenavDarkMode', String(this.isDarkMode));
  }
}
