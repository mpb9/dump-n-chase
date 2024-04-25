import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { FindingsComponent } from './findings/findings.component';

@Component({
  selector: 'app-models',
  standalone: true,
  templateUrl: './models.component.html',
  styleUrl: './models.component.css',
  imports: [DetailsComponent, FindingsComponent],
})
export class ModelsComponent {}
