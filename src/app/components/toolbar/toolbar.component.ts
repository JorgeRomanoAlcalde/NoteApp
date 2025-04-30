import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) { }

  // @@@@@@@@@@@@@@ ROUTES @@@@@@@@@@@@@@@@@@
  navigateToIndex() {
    this.router.navigate(['/']);
  }

  navigateToAllNotes() {
    this.router.navigate(['/all-notes']);
  }

  navigateToPinned() {
    this.router.navigate(['/pinned']);
  }

  navigateToFolders() {
    this.router.navigate(['/folders']);
  }

  navigateToTrashcan() {
    this.router.navigate(['/trashcan']);
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
