import { Component } from '@angular/core';
import { AnalysisComponent } from './analysis/analysis.component';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  imports: [AnalysisComponent],
})
export class ResultsComponent {}
