import { Component } from '@angular/core';
import { InteractComponent } from './interact/interact.component';
import { SourcesComponent } from './sources/sources.component';

@Component({
  selector: 'app-data',
  standalone: true,
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
  imports: [SourcesComponent, InteractComponent],
})
export class DataComponent {}
