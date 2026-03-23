import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactItem } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatRippleModule, MatIconModule, MatChipsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contacts: ContactItem[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.contacts = this.portfolioService.getContacts();
  }

  open(href: string): void {
    window.open(href, '_blank');
  }

}
