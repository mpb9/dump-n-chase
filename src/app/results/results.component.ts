import { Component } from '@angular/core';
import { AnalysisComponent } from './analysis/analysis.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  imports: [DetailsComponent, AnalysisComponent],
})
export class ResultsComponent {}
