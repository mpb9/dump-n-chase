import { Component } from '@angular/core';
import { ExploreComponent } from '../explore/explore.component';
import { IntroComponent } from '../process/intro/intro.component';
import { ProcessComponent } from '../process/process.component';
import { ResultsComponent } from '../results/results.component';
import { TableOfContentsComponent } from '../table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    TableOfContentsComponent,
    IntroComponent,
    ExploreComponent,
    ProcessComponent,
    ResultsComponent,
  ],
})
export class MainComponent {}
