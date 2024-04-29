import { Component } from '@angular/core';
import { DataComponent } from './data/data.component';
import { IntroComponent } from './intro/intro.component';
import { ModelsComponent } from './models/models.component';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
  imports: [DataComponent, ModelsComponent, IntroComponent],
})
export class ProcessComponent {}
