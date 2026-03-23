import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy{

  displayedCode = '';
  private fullCode = `const developer = {
  name: "Gabriel Medeiros",
  role: "Full-Stack Developer",
  location: "Campina Grande, PB",
  stack: [
    "Java", "Spring Boot",
    "Angular", ".NET",
    "PostgreSQL", "Azure",
    "PL/SQL","MSSQL Server"
  ],
  isAvailable: true
}`;
  private typeInterval: ReturnType<typeof setInterval> | null = null;
  private charIndex = 0;

  ngOnInit(): void {
      setTimeout(() => this.startTyping(), 600);
  }

  private startTyping(): void {
    this.typeInterval = setInterval(() => {
      if (this.charIndex < this.fullCode.length) {
        this.displayedCode += this.fullCode[this.charIndex];
        this.charIndex++;
      } else {
        if (this.typeInterval) clearInterval(this.typeInterval);
      }
    }, 22);
  }

  ngOnDestroy(): void {
    if (this.typeInterval) clearInterval(this.typeInterval);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

}
