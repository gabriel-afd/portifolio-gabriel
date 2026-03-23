import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit{

  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
  }

}
