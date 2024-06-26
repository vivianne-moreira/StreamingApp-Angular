import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = true;
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;

    const navbarToggle = document.querySelector('.navbar-toggler') as HTMLElement;
    navbarToggle.blur(); 
  }
}
