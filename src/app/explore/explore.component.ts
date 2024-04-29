import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExamineComponent } from './examine/examine.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
  imports: [ExamineComponent, AboutMeComponent],
})
export class ExploreComponent {}
