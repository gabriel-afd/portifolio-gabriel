import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgForOf } from '@angular/common';

interface NavItem {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgForOf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  navItems: NavItem[] = [
    {label: 'sobre', anchor: 'sobre'},
    {label: 'experiência', anchor: 'experiencia'},
    { label: 'projetos',anchor: 'projetos' },
    { label: 'skills',anchor: 'skills' },
    { label: 'contato',anchor: 'contato' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  scrollTo(anchor: string): void {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    this.mobileMenuOpen = false;
  }

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
