import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatRippleModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
      this.projects = this.portfolioService.getProjects();
  }

  openProject(link: string){
    window.open(link, '_blank');
  }

}
