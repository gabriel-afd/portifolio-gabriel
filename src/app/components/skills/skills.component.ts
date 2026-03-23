import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SkillGroup } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatRippleModule, MatTooltipModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skillGroups: SkillGroup[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skillGroups = this.portfolioService.getSkillGroups();
  }

}
