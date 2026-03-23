import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Stat, Education } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats: Stat[] = [];
  education: Education[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.stats = this.portfolioService.getStats();
    this.education = this.portfolioService.getEducation();
  }

  downloadCV(): void {
    window.open('assets/CV_Gabriel_Medeiros.pdf', '_blank');
  }

}
